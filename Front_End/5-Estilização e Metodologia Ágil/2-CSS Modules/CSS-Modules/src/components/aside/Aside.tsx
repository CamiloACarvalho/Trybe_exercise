import sytle from './aside.module.css';

function Aside() {
  return (
    <div className={ sytle.aside }>
      <a
        href="https://www.linkedin.com/in/camiloaugustocarvalho"
      >
        <img
          src="./public/linkedin.svg"
          className={ sytle.linkedin }
          alt="logo do LinkedIn"
        />
      </a>
      <a
        href="https://github.com/CamiloACarvalho"
      >
        <img
          src="./public/github.svg"
          className={ sytle.github }
          alt="logo do github"
        />
      </a>
      <a
        href="https://trybecourse.slack.com/team/U05LEU20N7J"
      >
        <img
          src="./public/slack.svg"
          className={ sytle.slack }
          alt="logo do slack"
        />
      </a>
      <a
        href="https://instagram.com/camilocarv_?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
      >
        <img
          src="./public/instagram.svg"
          className={ sytle.instagram }
          alt="logo do instagram"
        />
      </a>
      <a
        href="https://discord.gg/XCqRygW7"
      >
        <img
          src="./public/discord.svg"
          className={ sytle.discord }
          alt="logo do discord"
        />
      </a>
    </div>
  );
}
export default Aside;
