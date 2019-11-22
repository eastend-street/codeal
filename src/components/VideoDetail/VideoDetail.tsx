import React from "react";

import styled from "styled-components";
import { Grid } from "@material-ui/core";

const WrapVideo = styled.div`
  position: relative;
  width: 90%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin: 2rem;
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const VideoDetailGrid = styled(Grid)`
  && {
    background-color: #39414f;
    color: #fff;
  }
`;

type VideoDetailProps = {
  videoId: string;
};

const VideoDetail = ({ videoId }: VideoDetailProps) => {
  // const { state } = useContext(AppContext);
  return (
        <VideoDetailGrid container>
          <Grid item xs={6}>
            <div>here is video detail</div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <WrapVideo>
              <StyledIframe
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title={`${videoId}`}
              />
            </WrapVideo>
          </Grid>
        </VideoDetailGrid>
  );
};

export default VideoDetail;
