/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { get, upperFirst } from 'lodash';
import { auth } from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';
import Button from '../../components/FullWidthButton';


import useFetch from './hooks';
import { ALink, Block, Container, LinkWrapper, P, Wave, Separator } from './components';


const FIRST_BLOCK_LINKS = [
  {
    link:
      'https://strapi.io/documentation/v3.x/getting-started/quick-start.html#_4-create-a-category-content-type',
    contentId: 'app.components.BlockLink.documentation.content',
    titleId: 'app.components.BlockLink.documentation',
  },
  {
    link: 'https://github.com/strapi/foodadvisor',
    contentId: 'app.components.BlockLink.code.content',
    titleId: 'app.components.BlockLink.code',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    link: 'https://github.com/strapi/strapi/',
  },
  {
    name: 'Slack',
    link: 'https://slack.strapi.io/',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@strapi',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/strapijs',
  },
  {
    name: 'Reddit',
    link: 'https://www.reddit.com/r/Strapi/',
  },
];

const HomePage = ({ global: { plugins }, history: { push } }) => {
  const { error, isLoading, posts } = useFetch();
  const handleClick = e => {
    e.preventDefault();

    push(
      '/plugins/content-type-builder/content-types/plugins::users-permissions.user?modalType=contentType&kind=collectionType&actionType=create&settingType=base&forTarget=contentType&headerId=content-type-builder.modalForm.contentType.header-create&header_icon_isCustom_1=false&header_icon_name_1=contentType&header_label_1=null'
    );
  };

  const [cerca,updateCerca] = useState("");

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={"Arxiu UAM"} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <h2 id="mainHeader">Benvinguda a l'arxiu de la UAM</h2>
              <P>Aquí podràs arxivar, trobar i editar tots els continguts videogràfics creats per la Unitat d'Audiovisuals i Multimèdia de l'Àrea de Comunicació</P>

              <Separator style={{ marginTop: 37, marginBottom: 36 }} />
              <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'space-between' }}>
              <input style={{marginTop:'1em', marginBottom:"3px", paddingLeft:"0.5em", paddingTop:"0.5em", paddingBottom:"0.5em", fontSize:"1.3em"}} autoFocus={true} placeholder="Cerca un vídeo..." onChange={(e)=>updateCerca(e.target.value)} value={cerca} type="text"/><a href={`./plugins/content-manager/collectionType/application::video.video?_limit=10&_sort=titol%3AASC&_q=${cerca}`}>
                <Button color="primary">Cerca</Button></a>
              <a style={{marginTop:'2em'}} href="./plugins/content-manager/collectionType/application::video.video/create"><Button color="success">Afegir un Vídeo Nou</Button></a>
              <a style={{marginTop:'1em'}} href="./plugins/content-manager/collectionType/application::persona.persona/create"><Button color="success">Afegir una Persona Nova</Button></a>

              </div>
            </Block>
          </div>

          <div className="col-md-12 col-lg-4">
            <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
              <h2>Ajuda</h2>
              <p style={{paddingTop:"1em"}}>Mira aquest vídeo per veure com utilitzar l'arxiu de la UAM</p>

              <Separator style={{ marginTop: 18 }} />

            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
