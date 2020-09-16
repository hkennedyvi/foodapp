import React from 'react';
import './navbar.scss';

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <a href="#" className="nav-link">
                            <span class="link-text logo-text">Restaurant</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i class="fas fa-question"></i>
                            <span className="link-text">POINT 1</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i class="fas fa-question"></i>
                            <span className="link-text">POINT 2</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i class="fas fa-question"></i>
                            <span className="link-text">POINT 3</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i class="fas fa-question"></i>
                            <span className="link-text">POINT 4</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <main>
                <h1>Test</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam. Auctor eu augue ut lectus. Sit amet aliquam id diam maecenas ultricies. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Pellentesque elit eget gravida cum. Sit amet consectetur adipiscing elit. Duis ultricies lacus sed turpis tincidunt id aliquet. Sed elementum tempus egestas sed sed risus pretium quam. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Massa sapien faucibus et molestie. Elit ut aliquam purus sit. Ut placerat orci nulla pellentesque dignissim. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Sit amet nisl purus in. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. In cursus turpis massa tincidunt dui ut. Dolor magna eget est lorem ipsum. Donec et odio pellentesque diam. Amet nulla facilisi morbi tempus iaculis. Vulputate odio ut enim blandit volutpat maecenas. Amet nisl purus in mollis nunc. Arcu bibendum at varius vel pharetra. Leo vel orci porta non pulvinar neque laoreet suspendisse. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus viverra adipiscing at in tellus integer feugiat scelerisque.
                    Et nets et malesuada fames ac turpis egestas integer. Nec sagittis aliquam malesuada bibendum. Sit amet justo donec enim. Consequat mauris nunc congue nisi vitae suscipit tellus. Consectetur adipiscing elit ut aliquam purus. Purus gravida quis blandit turpis cursus in hac habitasse platea. Dui accumsan sit amet nulla facilisi morbi. Et malesuada fames ac turpis egestas sed. Elementum sagittis vitae et leo duis ut. Eu lobortis elementum nibh tellus molestie nunc. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Augue mauris augue neque gravida.
                </p>
            </main>
        </div>
    );
}

export default NavBar;