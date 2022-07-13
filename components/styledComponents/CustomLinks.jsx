import React from "react";
import { Navlink, CustomIconLinkContainer } from "./navStyle";
import { ListItem, ListItemIcon, Typography, ListItemText } from "../../assets";
import Link from "next/link";

export const CustomLink = ({ title, path }) => {
  return (
    <Navlink>
      <Link href={`/${path}`}>{title}</Link>
    </Navlink>
  );
};

export const CustomIconLink = ({ title, path, Icon, color }) => {
  return (
    <CustomIconLinkContainer>
      <ListItem>
        <ListItemIcon>
          <Icon sx={{ color: color }} />
        </ListItemIcon>
        <ListItemText>
          <Typography>
            <Link href={`/${path}`} className="mobileNavLink">
              {title}
            </Link>
          </Typography>
        </ListItemText>
      </ListItem>
    </CustomIconLinkContainer>
  );
};
