import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRouterLink,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sarah's Mushroom Emporium</IonTitle>
          <IonButtons slot="end">
            <IonRouterLink href="/secure">
              <IonButton
              // onClick={async () => {
              //   await goToSecureSite();
              // }}
              >
                Sign In
              </IonButton>
            </IonRouterLink>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sarah's Mushroom Emporium</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Password Cracking Exercise</h1>
        <p>
          Sarah is a small business owner who has been selling mushrooms out of
          her mom-and-pop shop for years (colloquially known as "The Spore
          Store"). Recently, she decided that she wanted to bring her business
          to the world wide web and decided to create a website where her
          customers can purchase mushrooms online and have them delivered. As
          part of her website, Sarah decided to allow users to create an account
          so that they can log in and see the statuses of their mushroom orders
          as well as store their payment details.
        </p>
        <p>
          Sarah's amazing website, in addition to her reputation for sourcing
          and distributing the highest quality mushrooms available, has led to
          an incredible increase in sales as well as a large amount of attention
          on her business. Unfortunately for Sarah, some of this attention has
          come from hackers who have targeted Sarah's website, suspecting that
          it may be vulnerable.
        </p>
        <p>
          Your hacking group was able to get into Sarah's server and was able to
          download the{" "}
          <a href="/assets/project-files/password-store.txt" download>
            login details of her customers
          </a>
          . Sarah was smart enough to not store the raw passwords of her
          customers so all your group was able to obtain was her customers'
          usernames and their hashed passwords.
        </p>
        <p>
          Your group was able to find a{" "}
          <a href="/assets/project-files/rainbow-table.txt" download>
            list of the hashes for the most commonly used passwords on the
            internet
          </a>
          . They're not sure how this could be helpful but perhaps there is a
          way that you can determine Sarah's password by using this list.
          Recover her password, and log into her account. Godspeed.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
