import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, CardMedia } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";


const useStyles = makeStyles((theme) => ({
  discordIcon: {
    height: 22,
    width: 25,
  },
  socialIconGroup: {
    marginTop: 55,
  },
  socialIcon: {
    color: theme.palette.secondary.socialIconColor,
    fontSize: 25,
  },
}));

export const SocialIcon = (props) => {
  const classes = useStyles();
  const buttonPadding = props.compact ? 0 : 12;
  return (
    <div>
      <a href="https://twitter.com/Poltergeistlabs">
        <IconButton
          style={{ paddingRight: buttonPadding, paddingLeft: buttonPadding }}
        >
          <TwitterIcon className={classes.socialIcon} />
        </IconButton>
      </a>
      <a href="https://t.me/poltergeistlabs">
        <IconButton style={{ paddingRight: buttonPadding }}>
          <TelegramIcon className={classes.socialIcon} />
        </IconButton>
      </a>
      <a href="https://www.reddit.com/r/PoltergeistDEX/">
        <IconButton style={{ paddingRight: buttonPadding }}>
          <RedditIcon className={classes.socialIcon} />
        </IconButton>
      </a>

    </div>
  );
};
