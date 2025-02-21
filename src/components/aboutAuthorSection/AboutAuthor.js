import PulseBtn from "../buttons/pulseBtn/PulseBtn";
import Container from "../container/Container";

import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/http.hook";

import styles from "./aboutAuthor.module.scss";

const AboutAuthor = ({ managerId }) => {
  const { request } = useHttp();

  const {
    data: profilesData = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profiles"],
    queryFn: () => request("http://localhost:3001/profiles"),
    staleTime: 300000,
    retry: 2,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }

  const selectedManager = profilesData.find(
    (profile) => profile.id === managerId // find возвращает первый объект в массиве, который удовлетворяет условие
  );

  if (!selectedManager) {
    console.error("Manager not found or data is still loading.");
    return <div>Manager not found</div>;
  }

  console.log("Profiles data:", selectedManager);

  const { title, name, position, description, imageUrl } = selectedManager;

  return (
    <section className={styles.aboutAuthor}>
      <Container>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.managerProfile}>
          <div className={styles.photoProfile}>
            <img src={require(`../../${imageUrl}`)} alt="manager" />
          </div>
          <div className={styles.wrapperProfile}>
            <div className={styles.smallText}>{position}</div>
            <div className={styles.name}>{name}</div>
            <hr className={styles.divider}></hr>
            <div className={styles.descr}>{description}</div>
            <PulseBtn />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutAuthor;
