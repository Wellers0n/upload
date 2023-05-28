import React from "react";
import moment from "moment";
import { Stack, Typography, CardContent, Card } from "@mui/material";

type Props = {
  title: string;
  value: string;
  variant?: "green" | "red" | "";
};

const CardComponent = (props: Props) => {
  const { title, value, variant = "" } = props;
  return (
    <Card >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div" color={variant}>
          {value}
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          {moment().format("DD/MM/YYYY")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
