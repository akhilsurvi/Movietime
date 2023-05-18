import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    width: "auto",
    paddingTop: "56.25%" // 16:9
  },
  modalCard: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    aspectRatio: "16 / 9",
    margin: "0 auto"
  }
}));
