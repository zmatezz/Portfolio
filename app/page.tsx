import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import StarsCanvas from "./components/star-background";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
     raw 
    }
    knowTechs {
      name
      iconSvg
      startDate
      textColor{
        hex
      }
      backgroundColor{
        hex
      }
    }
    profilePicture {
      url
    }
    technologies{
      name
    }
    
    socials{
      url
      iconSvg
    }
    
   highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
          projectIcon
        }
      }
    workExperiences(orderBy: startDate_DESC) {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
        }
      } 
    }
  `;

  return fetchHygraphQuery(query, 60 * 60 * 24);
};

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData();

  /* console.log("esse é o pageData", pageData); */

  return (
    <>
      <StarsCanvas />
      <HeroSection homeInfo={pageData} />
      <KnowTechs techs={pageData.knowTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  );
}
