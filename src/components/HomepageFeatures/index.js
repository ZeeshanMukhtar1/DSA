import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Focus on Essential Concepts",
    Svg: require("@site/static/img/Conceptual.svg").default,
    description: (
      <>
        We prioritize clarity and depth to ensure you grasp core concepts
        effectively.
      </>
    ),
  },
  {
    title: "Practical Coding Examples",
    Svg: require("@site/static/img/practice.svg").default,
    description: (
      <>
        Our guides are designed to help you apply theory to practice seamlessly.
      </>
    ),
  },
  {
    title: "Comprehensive Step-by-Step Guides",
    Svg: require("@site/static/img/sollution.svg").default,
    description: (
      <>
        We provide clear explanations and code snippets to guide you through
        complex algorithms with ease.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
