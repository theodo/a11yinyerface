import { Stack, Container, Fab, Link, List, Grid, Paper } from "@mui/material";
import type { NextPage } from "next";
import AppBar from "components/ui/AppBar/AppBar";
import Image from "next/image";
import { Box } from "@mui/system";

const Home: NextPage = () => {
  return (
    <>
      <AppBar />
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          py="2em"
          spacing="5em"
          textAlign="center"
          justifyContent="center"
          marginTop="5em"
        >
          <Stack direction="row" justifyContent="space-around" spacing="5em">
            <Image src={require("..//../src/images/apple-pie.jpeg")} alt="" />

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Paper sx={{ padding: "1em", border: "solid" }}>
                <div>
                  Vous devez faire vos courses pour cuisiner un gâteau aux
                  pommes.
                </div>
                <div> Voici ce que vous devrez acheter : </div>
                <List list-style-type="disc">
                  <li>2 pommes</li>
                  <li>2 oeufs</li>
                  <li>200g de farine</li>
                </List>
              </Paper>
            </Box>
          </Stack>

          <Link href="/fruits">
            <Fab color="secondary" variant="extended" size="large">
              Je démarre mes courses
            </Fab>
          </Link>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
