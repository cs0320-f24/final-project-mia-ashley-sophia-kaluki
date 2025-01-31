import { useState, useEffect } from "react";
import Mapbox from "./Mapbox";
import Activities from "./Activities";
import "../styles/App.css";
import "../styles/index.css";
import "../output.css";
import Bear4 from "../assets/Bear4.png";
import { UserButton } from "@clerk/clerk-react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "./Activities";
import { Activity } from "../activityData";
import { collection, query, where, getDocs } from "firebase/firestore";
import Bear2 from "../assets/Bear2.png"; 
import SearchIcon from "../assets/SearchIcon.png"; 

enum Section {
  MAP_DEMO = "MAP_DEMO",
  ACTIVITIES = "ACTIVITIES",
}

export default function ActivitiesFinder() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialSearchResults = location.state?.searchResults || [];
  const [searchResults, setSearchResults] = useState(initialSearchResults);

  /** fetch the initial activiites */
  useEffect(() => {
    const fetchInitialActivities = async () => {
      try {
        if (!location.state?.searchResults) {
          console.warn("No search results passed. Fetching all activities as default.");

          const searchCollection = collection(db, "activities");
          const querySnapshot = await getDocs(searchCollection);

          const allActivities: Activity[] = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: data.id,
              title: data.title,
              description: data.description,
              date: data.date,
              startTime: data.start_time,
              endTime: data.end_time || "Unknown",
              image: data.image,
              location: typeof data.location === "object" && data.location.name ? data.location.name : "Unknown",
              latitude: data.location?.latitude || "Unknown",
              longitude: data.location?.longitude || "Unknown",
              attendance: data.attendance,
              attendees: data.attendees,
              time: data.time,
              category: data.category,
              onCampus: data.onCampus,
            };
          });

          setSearchResults(allActivities);
          console.log("all activities:", allActivities); 
        }
      } catch (error) {
        console.error("Error fetching initial activities:", error);
      }
    };

    fetchInitialActivities();
  }, [location.state]);

  useEffect(() => {
    console.log("Search results updated: ", searchResults); 
  }, [searchResults]);

  return (
    <div className="space-y-10">
      <div className="flex flex-row item-center justify-center mt-8 lg:mt-12 space-x-5">
        <a
          href="/searcher"
          className="kadwa bg-white text-gray-600 rounded-2xl text-xl md:text-lg w-60 h-10 flex items-center pl-4"
        >
          <div className="flex flex-row space-x-24 items-center justify-center">
          <span>Search...</span>
          <img
              src={SearchIcon}
              alt="Search Icon"
              className="w-8 h-auto overflow-hidden relative"
            />
            </div>
        </a>
        <button
          className="paytone-one bg-customRed text-white rounded-lg text-2xl md:text-2xl w-48 h-10"
          onClick={() => navigate("/user-profile")}
        >
          User Profile
        </button>
      </div>
      <div className="flex flex-col space-x-10">
        <Activities activities={searchResults}/>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-end justify-between mb-4">
          <div className="basis-1/4"></div>
          <div className="basis-1/2">
            <h3
              className="limelight text-2xl md:text-5xl xl:text-7xl text-white"
              aria-label="Page Title"
            >
              Map
            </h3>
          </div>
          <div className="basis-1/4 flex flex-row justify-items-end">
            <img
              src={Bear2}
              alt="A bear"
              className="w-24 md:w-32 lg:48 h-auto overflow-hidden relative"
            />
          </div>
        </div>
        <Mapbox />
      </div>
    </div>
  );
}
