import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Who are we?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Our team consists of consensus protocol researchers from Stanford and experienced layer 1 developers from all over the world.
      </>
    ),
  },
  {
    title: 'What is Babylon?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Babylon is a new Cosmos project whose vision is to leverage the security of Bitcoin for enhancing the security of Cosmos zones and other PoS chains.
      </>
    ),
  },
  {
    title: 'Babylon Technology',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Core primitives for writing onto and reading timestamps on Bitcoin by the consumer zones and protocols that use the timestamp information.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
