import UserContext from "contexts/UserContext";
import React, { useContext, useState } from "react";
import ReactMarkdown from "react-markdown";
import apis from "services/axios";

// import PropTypes from "prop-types";
import styles from "./styles.module.scss";
type ReposListProps = {
  repos: any[];
};

const ReadmeContainer = ({ raw }: { raw: string }) => (
  <ReactMarkdown children={raw} />
);

const Card = ({ repo, user }: { repo: any; user: any }) => {
  const [available, setAvailable] = useState(true);
  const [hide, setHide] = useState(true);
  const [rawHtml, setRawHtml] = useState("");
  const readmeUrl = `https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/README.md`;
  const repoUrl = `https://github.com/${repo.full_name}`;

  const handleClick = () => {
    if (rawHtml !== "") setHide((prev) => !prev);
    if (rawHtml === "")
      apis
        .getReadme(readmeUrl)
        .then((response) => {
          setHide((prev) => !prev);
          setRawHtml(response?.data || "");
        })
        .catch((err) => {
          //   there's no readme
          setAvailable(false);
          console.log(err);
        });
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        {available ? (
          <button onClick={handleClick} className={styles.repo__button}>
            {hide ? "Open" : "Close"} <b>{repo.full_name}</b> README.md
          </button>
        ) : (
          <span>
            <b>{repo.full_name}</b> doesn't have README.md
          </span>
        )}
        <a href={repoUrl} target="__blank" className={styles.repo__link}>
          Open repository in new tab
        </a>
      </div>
      <div className={styles.card__body}>
        {!hide && (
          <>
            <ReadmeContainer raw={rawHtml} />
            <button onClick={() => setHide(true)}>close</button>
          </>
        )}
      </div>
    </div>
  );
};

function ReposList({ repos }: ReposListProps) {
  const user: any = useContext(UserContext);

  const renderRepoCard = (repo: any) => (
    <Card key={repo.id} {...{ repo, user }} />
  );

  return (
    <div className={styles.repos__container}>
      {repos.map((repo: any) => renderRepoCard(repo))}
    </div>
  );
}

ReposList.propTypes = {};

export default ReposList;
