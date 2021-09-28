import React from 'react';
import Container from 'react-bootstrap/Container';
import { graphql, useStaticQuery } from "gatsby";
import BrainscanLogo from '../assets/brainscanlogo.svg';
import Layout from '../components/layout';
import GradientBackground from '../components/gradient-background';

export default function AboutUs() {
    const data = useStaticQuery(query);

    return (
        <GradientBackground>
            <Layout>
                <div className="uk-section">
                    <div className="uk-container uk-container-large">
                    <Container 
                        style={{
                            width: '100%',
                            display: 'flex', 
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }} 
                    >
                        <BrainscanLogo width="25%" height="25%" />
                        <div style={{ height: '3%', width: '35%', marginTop: '1em' }}
                        >{data.strapiHomepage.seo.metaDescription}</div>
                    </Container>
                    </div>
                </div>
            </Layout>
        </GradientBackground>
    );
};

const query = graphql`
    query {
        strapiHomepage {
            seo {
                metaDescription
            }
        }
    }
`;