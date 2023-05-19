import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>GUSD</Title>
      <h1>We love our LGBTQIA+ students</h1>
      <p>
        Regardless of how they identify, 
        we support our kids and want to provide them with all the resources
        they need to live a happy and fulfilling life. 
      </p>
      <div class="container">
        <img src="rainbow-flag.png"></img>
        <div class="container">
          <a class="credit" href="https://www.flaticon.com/free-icons/pride" title="pride icons">Pride icons created by Freepik - Flaticon</a>
        </div>
      </div>
      <p>
        Join us at the next 
        <a href="https://www.gusd.net/Page/15" 
        target="_blank">Glendale Unified School Board meeting </a>
        to voice your support for our LGBTQIA+ students.
      </p>
    </main>
  );
}
