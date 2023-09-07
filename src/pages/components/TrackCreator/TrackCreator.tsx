import React, { FC, useState } from "react";

type TrackerProps = {};

const TrackCreator: FC<TrackerProps> = ({}) => {
  const [trackName, setTrackName] = useState();
  return (
    <div>
      <input type="text" />
      <button>add track</button>
    </div>
  );
};

export default TrackCreator;
