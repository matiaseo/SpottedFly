import {
  VolumeUpRounded,
  VolumeDownRounded,
  VolumeOffRounded,
  VolumeMuteRounded
} from "@mui/icons-material";


export const VolumeIcon = ({volume, htmlColor, maxVolume}) => (
  volume === 0 ? <VolumeOffRounded htmlColor={htmlColor} /> :
    volume > 0 && volume <= 0.25*maxVolume? <VolumeMuteRounded htmlColor={htmlColor} /> :
      volume >  0.25*maxVolume && volume <= 0.75*maxVolume ?  <VolumeDownRounded htmlColor={htmlColor} /> :
        <VolumeUpRounded htmlColor={htmlColor} /> 
)


