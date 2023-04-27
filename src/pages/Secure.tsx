import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { Auth } from "aws-amplify";
import Confetti from "react-confetti";

const Secure: React.FC = () => {
  const router = useIonRouter();

  async function signOut() {
    try {
      await Auth.signOut({ global: true });
      router.push("/home");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sarah's Mushroom Emporium</IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={async () => {
                await signOut();
              }}
            >
              Sign Out
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <Confetti />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sarah's Mushroom Emporium</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Secure;
