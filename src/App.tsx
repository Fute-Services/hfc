


import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import NotFoundPage from './Pages/NotFoundPage'

import Navbar from './components/Navbar.tsx'

import EntrancePage from './Pages/EntrancePage'
import NabarGoldenWillows from './components/NavbarGoldenWillows.tsx'
// Route components are code-split so the entrance page no longer ships every
// tower dataset (~122k lines of polygon coordinates) up front.
const HomePage = lazy(() => import('./Pages/Arena/HomePage.tsx'))
const LocationPage = lazy(() => import('./Pages/Arena/LocationPage.tsx'))
const ProjectDetails = lazy(() => import('./Pages/Arena/ProjectDetails.tsx'))
const Pavilion = lazy(() => import('./Towers/Tower3_Pavilion/Pavilion.tsx'))
const MasterPlanPage = lazy(() => import('./Pages/Arena/MasterPlanPage.tsx'))
const Floor_Pavilion = lazy(() => import('./Towers/Tower3_Pavilion/Floor_Pavilion.tsx'))
const GalleryPage = lazy(() => import('./Pages/Arena/GalleryPage.tsx'))
const Unit_Pavilion = lazy(() => import('./Towers/Tower3_Pavilion/Unit_Pavilion.tsx'))
const GrandStand = lazy(() => import('./Towers/Grandstand/GrandStand.tsx'))
const Floor_Grandstand = lazy(() => import('./Towers/Grandstand/Floor_Grandstand.tsx'))
const Unit_Grandstand = lazy(() => import('./Towers/Grandstand/Unit_Grandstand.tsx'))
const ProjectHighlight = lazy(() => import('./Pages/Arena/ProjectHighlights1.tsx'))
const Arcadia = lazy(() => import('./Towers/Arcadia/Arcadia.tsx'))
const Citatel = lazy(() => import('./Towers/Citatel/Citatel.tsx'))
const GreenField = lazy(() => import('./Towers/GreenField/GreenField.tsx'))
const Athletica = lazy(() => import('./Towers/Athletica/Athletica.tsx'))
const Floor_Arcadia = lazy(() => import('./Towers/Arcadia/Floor_Arcadia.tsx'))
const Unit_Arcadia = lazy(() => import('./Towers/Arcadia/Unit_Arcadia.tsx'))
const Floor_Citatel = lazy(() => import('./Towers/Citatel/Floor_Citatel.tsx'))
const Unit_Citatel = lazy(() => import('./Towers/Citatel/Unit_Citatel.tsx'))
const Floor_Greenfield = lazy(() => import('./Towers/GreenField/Floor_Greenfield.tsx'))
const Unit_Greenfield = lazy(() => import('./Towers/GreenField/Unit_Greenfield.tsx'))
const EntrancePageEbony = lazy(() => import('./Pages/Ebony/EntrancePageEbony.tsx'))
const EntrancePageGoldenWillows = lazy(() => import('./Pages/GoldenWillows/EntrancePageGoldenWillows.tsx'))
const ProjectHighlights_Gold = lazy(() => import('./Pages/GoldenWillows/ProjectHighlights_Gold.tsx'))
const LocationPage_Gold = lazy(() => import('./Pages/GoldenWillows/LocationPage_Gold.tsx'))
const ProjectStatus_Golden = lazy(() => import('./Pages/GoldenWillows/ProjectStatus_Golden.tsx'))
const GalleryPageGolden = lazy(() => import('./Pages/GoldenWillows/GalleryPageGolden.tsx'))
const GoldenWillowsLayout = lazy(() => import('./Pages/GoldenWillows/GoldenWillowsLayout.tsx'))
const ProjectDetailsPage = lazy(() => import('./Pages/GoldenWillows/ProjectDetailsPage.tsx'))
const Unit_Athletica = lazy(() => import('./Towers/Athletica/Unit_Athletica.tsx'))
const Floor_Athletica = lazy(() => import('./Towers/Athletica/Floor_Athletica.tsx'))
const ClubHouse = lazy(() => import('./Pages/Club_House/ClubHouse.tsx'))
const Arena_Walkthrough = lazy(() => import('./Pages/Arena/Arena_Walkthrough.tsx'))
const QualityTab = lazy(() => import('./Pages/QualityTab.tsx'))
const Project_Status = lazy(() => import('./Pages/Arena/Project_Status.tsx'))
const Location360 = lazy(() => import('./Pages/Arena/Location360.tsx'))
const Stadia = lazy(() => import('./Towers/Stadia/Stadia.tsx'))
const Floor_Stadia = lazy(() => import('./Towers/Stadia/Floor_Stadia.tsx'))
const Unit_Stadia = lazy(() => import('./Towers/Stadia/Unit_Stadia.tsx'))
const Olympus = lazy(() => import('./Towers/Olympus/Olympus.tsx'))
const Floor_Olympus = lazy(() => import('./Towers/Olympus/Floor_olympus.tsx'))
const Unit_Olympus = lazy(() => import('./Towers/Olympus/Unit_Olympus.tsx'))

// Shown while a route chunk loads. A blank screen on a sales kiosk reads as a crash,
// so this keeps the brand colours on screen instead.
function RouteFallback() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#5d5c61]">
      <div className="h-12 w-12 rounded-full border-4 border-white/30 border-t-[#e6a524] animate-spin" />
    </div>
  )
}

function App() {

  const location = useLocation();

  const hide = ["/"]
  const hideheader = hide.includes(location.pathname);


  const showNavbarPages = ["/arena", "/arena_projecthighlights",
     "/arena_location", "/arena_master-plan", "/arena_project_details",
    "/arena_gallery", "/project_status",
    "/arena_pavilion",  "/arena_citatel", "/arena_arcadia",
    "/arena_atheletica","/arena_greenfield","/arena_grandstand","/arena_stadia","/arena_olympus"];

  const shouldShowNavbar = showNavbarPages.includes(location.pathname);

  const showNavbarGoldenWillows = ["/goldenwillows", "/golden_projecthighlights", "/golden_location", "/project_status_golden","/projectdetails_golden","/goldenwillowslayout","/gallery_golden"];

  const GoldenWillowsNav = showNavbarGoldenWillows.includes(location.pathname);

  return (
    <>
      {hideheader && <Header />}
      <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<EntrancePage />} />
        <Route path="/arena" element={<HomePage />} />
        <Route path="/arena_projecthighlights" element={<ProjectHighlight />} />
        <Route path="/arena_master-plan" element={<MasterPlanPage />} />
        <Route path="/arena_location" element={<LocationPage />} />
        <Route path="/arena_gallery" element={<GalleryPage />} />
        <Route path="/360" element={<Location360/>}/>
        <Route path="/arena_project_details" element={<ProjectDetails />} />
        <Route path="/arena_walkthrough" element={<Arena_Walkthrough/>}/>
        <Route path="/project_status" element={<Project_Status/>}/>
        <Route path="*" element={<NotFoundPage />} />



        <Route path="/arena_pavilion" element={<Pavilion />} />
        <Route path="/arena_floorpavilion/:id" element={<Floor_Pavilion />} />
        <Route path="/arena_unitpavilion/:id" element={<Unit_Pavilion />} />

        <Route path="/arena_grandstand" element={<GrandStand />} />
        <Route path="/arena_floorgrandstand/:id" element={<Floor_Grandstand />} />
        <Route path="/arena_unitgrandstand/:id" element={<Unit_Grandstand />} />

        


        <Route path="/arena_arcadia" element={<Arcadia />} />
        <Route path="/arena_floorarcadia/:id" element={<Floor_Arcadia />} />
        <Route path="/arena_unitarcadia/:id" element={<Unit_Arcadia />} />

        <Route path="/arena_citatel" element={<Citatel />} />
        <Route path="/arena_floorcitatel/:id" element={<Floor_Citatel />} />
        <Route path="/arena_unitcitatel/:id" element={<Unit_Citatel />} />

        <Route path="/arena_greenfield" element={<GreenField />} />
        <Route path="/arena_floorgreenfield/:id" element={<Floor_Greenfield />} />
        <Route path="/arena_unitgreenfield/:id" element={<Unit_Greenfield />} />

        <Route path="/arena_atheletica" element={<Athletica />} />
        <Route path="/arena_flooratheletica/:id" element={<Floor_Athletica/>}/>
        <Route path="/arena_unitatheletica/:id" element={<Unit_Athletica/>}/>

         <Route path="/arena_stadia" element={<Stadia />} />
        <Route path="/arena_floorstadia/:id" element={<Floor_Stadia/>}/>
        <Route path="/arena_unitstadia/:id" element={<Unit_Stadia/>}/>

        <Route path="/arena_olympus" element={<Olympus />} />
        <Route path="/arena_floorolympus/:id" element={<Floor_Olympus />} />
        <Route path="/arena_unitolympus/:id" element={<Unit_Olympus />} />




        {/* Ebony */}
        <Route path="/ebony" element={<EntrancePageEbony />} />

        {/* GoldenWillows */}
        <Route path="/goldenwillows" element={<EntrancePageGoldenWillows />} />
        <Route path="/golden_projecthighlights" element={<ProjectHighlights_Gold />} />
        <Route path="/golden_location" element={<LocationPage_Gold />} />
        <Route path="/project_status_golden" element={<ProjectStatus_Golden />} />
        <Route path="/gallery_golden" element={<GalleryPageGolden />} />
        <Route path="/goldenwillowslayout" element={<GoldenWillowsLayout />} />
        <Route path="/projectdetails_golden" element={<ProjectDetailsPage />} />
        {/* Towers */}

        {/* club-house */}
        <Route path="/club-house" element={<ClubHouse/>}/>

        <Route path="/quality" element={<QualityTab/>}/>


      </Routes>
      </Suspense>

      {shouldShowNavbar && <Navbar />}

      {GoldenWillowsNav && <NabarGoldenWillows />}

    </>
  )
}

export default App
