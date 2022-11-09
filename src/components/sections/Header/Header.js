import './Header.css'
import { useState } from 'react';
const Header = () => {
	const[Toggle1,showToggle1]= useState(false);
	const[Toggle2,showToggle2]= useState(false);
	const[Toggle3,showToggle3]= useState(false);
	return (
		<>
			<header>
				<div className="container">
					<div className="logo">
						<a href="index.html"><span className="first-letter">i</span><span className="dn-phone">shak</span> <span className="first-letter">b</span><span className="dn-phone">enfredj</span></a>
					</div>
					<ul className="menu">
						<span className='close'>×</span>
						<li><a className="active" data-lang="home" href="index.html">Home</a></li>
						<li onClick={()=> {showToggle1(!Toggle1)}} className={Toggle1 ? "show-toggle" : ""}><span data-lang="lessons">Lessons</span> <i class="uil uil-angle-down"></i>
							<div className='toggle'>
								<a href="/"><i class="uil uil-html5"></i>HTML</a>
								<a href="/"><i class="uil uil-css3-simple"></i>CSS</a>
								<a href="/"><i class="uil uil-java-script"></i>JavaScript</a>
							</div>
						</li>
						<li onClick={()=> showToggle2(!Toggle2)} className={Toggle2 ? "show-toggle" : ""} ><span data-lang="ytb">YTB Channel</span> <i class="uil uil-angle-down"></i>
							<div className="toggle">
								<a href="/"><i class="uil uil-brackets-curly"></i>Front-end Tutorial</a>
								<a href="/"><i class="uil uil-arrow-random"></i><span data-lang="mix">Mix</span></a>
							</div>
						</li>
						<li onClick={()=> showToggle3(!Toggle3)} className={Toggle3 ? "show-toggle" : ""} ><span data-lang="app">Applications</span> <i class="uil uil-angle-down"></i>
							<div className="toggle">
								<a href="/"><i className="fa-solid fa-code"></i>Front-end</a>
								<a href="/"><i className="fa-solid fa-terminal"></i>Algorithms</a>
							</div>
						</li>
						<li><a href="/" data-lang="articles">Articles</a></li>
					</ul>
					<div className="bars">
					<i class="uil uil-bars"></i>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header