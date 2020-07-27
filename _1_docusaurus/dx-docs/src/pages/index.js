import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>The framework behind great software</>,
        imageUrl: 'img/divblox-screens.png',
        description: (
            <>
                Whether you’re a business owner or a software creator, Divblox will save you time & money.
            </>
        ),
    },
    {
        title: <>Full stack apps</>,
        imageUrl: 'img/dx-iphone-x.png',
        description: (
            <>
                Divblox is a web and mobile app development framework that allows anyone to, from designers and analysts, to hard-core developers, to collaborate and create amazing experiences in no time.
            </>
        ),
    },
    {
        title: <>Web-first approach</>,
        imageUrl: 'img/web_based_developers.jpg',
        description: (
            <>
                Divblox promotes a web-first approach which allows you to create all of your solutions with the same language stack. This means you will always create a web app first, built on languages like HTML, JavaScript and CSS. Your web app can then be exported as a native app for iOS &amp; Android.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Divblox framework documentation">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
                    <img alt="Create Component" src={useBaseUrl('_media/divblox-logo-1.png')} />
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started
                        </Link>
                    </div>
                    <div className={"text-center"}>
                        {/*<div className="column-container">*/}
                        {/*    <div className="column">*/}
                        {/*        <h1>Front-End</h1>*/}
                        {/*        <div className="text--center">*/}
                        {/*            <img alt="HTML" src={useBaseUrl('_media/html.ico')} style={{height: '150px'}}/>*/}
                        {/*            <img alt="CSS" src={useBaseUrl('_media/css.png')} style={{height: '150px'}} />*/}
                        {/*            <img alt="BOOTSTRAP" src={useBaseUrl('_media/bootstrap.png')} style={{height: '150px'}} />*/}
                        {/*        </div>*/}
                        {/*        <div className="text--center">*/}
                        {/*            <img alt="JS" src={useBaseUrl('_media/js.jpg')} style={{height: '150px'}} />*/}
                        {/*            <img alt="JQuery" src={useBaseUrl('_media/jquery.png')} style={{height: '150px'}} />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="column">*/}
                        {/*        <h1>Back-End</h1>*/}
                        {/*        <div className="text--center">*/}
                        {/*            <img alt="PHP" src={useBaseUrl('_media/php.png')} style={{height: '150px'}} />*/}
                        {/*        </div>*/}
                        {/*        <div className="text--center">*/}
                        {/*            <img alt="MYSQL" src={useBaseUrl('_media/mysql_logo.png')} style={{height: '150px'}} />*/}
                        {/*            <img alt="MARIADB" src={useBaseUrl('_media/mariadb.png')} style={{height: '150px'}} />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </header>
            {/*<main>*/}
            {/*    {features && features.length > 0 && (*/}
            {/*        <section className={styles.features}>*/}
            {/*            <div className="container">*/}
            {/*                <div className="row">*/}
            {/*                    /!*{features.map((props, idx) => (*!/*/}
            {/*                    /!*    <Feature key={idx} {...props} />*!/*/}
            {/*                    /!*))}*!/*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </section>*/}
            {/*    )}*/}
            {/*</main>*/}
        </Layout>
    );
}

export default Home;
