import React from "react";

export default function Navbar({ activePage, setActivePage }) {
	const pageChange = (event, page) => {
		const navLinks = document.querySelectorAll(".navLink");
		navLinks.forEach((link) => {
			if (link.classList.contains("active")) {
				link.classList.remove("active");
			}
		});
		event.target.classList.add("active");
		setActivePage(event.target.text);
	};

	return (
		<nav className="navbar bg-light sticky-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Jeremy Stevens
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="offcanvas offcanvas-end"
					tabIndex="-1"
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
				>
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
							Portfolio
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
							<li className="nav-item">
								<a
									onClick={pageChange}
									className="navLink nav-link active"
									href="#about"
								>
									About
								</a>
							</li>
							<li className="nav-item">
								<a
									onClick={pageChange}
									className="navLink nav-link"
									href="#projects"
								>
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a
									onClick={pageChange}
									className="navLink nav-link"
									href="#resume"
								>
									Resume
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#Interests"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Interests
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#interests/pc-hardware">
											PC Hardware
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#interests/video-games">
											Video Games
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#interests/photography">
											Photography
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

{
	/* <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Jeremy Stevens
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDarkDropdown"
					aria-controls="navbarNavDarkDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a className="nav-link">About Me</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link">Projects</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link">Resume</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link">Contact</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Interests
							</a>
							<ul className="dropdown-menu dropdown-menu-dark">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav> */
}
