import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
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
     
    }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function Home() {
  const { page: pageData } = await getPageData();

  console.log("esse é o pageData", pageData)

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowTechs techs={pageData.knowTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience />
    </>
  );
}
