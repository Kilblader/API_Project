import React, { useEffect, useState } from "react";

const Profile = ({ profileData }) => {
  const stats = {};
  stats[392767087] = "Resilience";
  stats[144602215] = "Intellect";
  stats[1735777505] = "Discipline";
  stats[1943323491] = "Recovery";
  stats[2996146975] = "Mobility";
  stats[4244567218] = "Strength";
  stats[1935470627] = "Light";

  const classTypes = {};
  classTypes[0] = "Titan";
  classTypes[1] = "Hunter";
  classTypes[2] = "Warlock";

  const raceTypes = {};
  raceTypes[0] = "Human";
  raceTypes[1] = "Awoken";
  raceTypes[2] = "Exo";

  const genderTypes = {};
  genderTypes[0] = "Male";
  genderTypes[1] = "Female";

  return (
    <div className="Data">
      <h3>Class: {classTypes[profileData.classType]}</h3>
      <h3>Race: {raceTypes[profileData.raceType]}</h3>
      <h3>Gender: {genderTypes[profileData.genderType]}</h3>
      <h3>
        {profileData?.stats &&
          Object.keys(profileData?.stats)?.map((statKey) => (
            <p>
              {stats[statKey]}: {profileData?.stats[statKey]}
            </p>
          ))}
      </h3>
    </div>
  );
};

export default Profile;

/* <img src={profileData.emblemBackgroundPath}></img> */
