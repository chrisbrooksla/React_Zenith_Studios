import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Image from "material-ui-image";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import { spacing } from "@material-ui/system";

function Staff1() {
  return (
    <Container maxWidth="lg" className="staff-bio-container">
      <Grid container spacing="2" mb="8">
        <Grid item xs="12" md="6">
          <Image
          className="staff-pic"
            src="/Assets/img/staff-pics/george-martin.jpg"
            style={{ height: "100", width: "100%" }}
          />
        </Grid>
        <Grid item xs="12" md="6">
          <Typography variant="h4" style={{ height: 100, width: "100%" }}>
            Sir George Martin
          </Typography>
          <Typography variant="body1">
            The tirelessly experimental, gorgeously grandiose production of
            George Martin is synonymous with the Beatles, and understandably so.
            His studio stewardship of the group for most of their existence went
            far beyond the traditional producer role and, together, they pushed
            the limits of what pop music could sound like. But Martin's career
            predated the Fab Four and would continue long after they broke up.
            <br />
            <br />
            He lent his formidable, innovative production and arranging talents
            to a variety of pop, novelty and soundtrack sessions in the early
            days; and his work with a panoply of top-name rock artists from the
            Fifties through the Nineties solidified a legacy that didn't even
            need it. Some notable records that Sir George has done include: The
            Beatles, 'Rubber Soul' (1965) The Beatles, 'The White Album' (1968)
            Jeff Beck, 'Blow by Blow' (1975) The Beatles, 'Revolver' (1966)
            'Sgt. Pepper's Lonely Hearts Club Band' (1967) 'Abbey Road' (1969)
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      {/* ------------------------------ */}

      <Grid container spacing="4">
        <Grid item xs="12" md="6">
          <Image
          className="staff-pic"
            src="/Assets/img/staff-pics/brian-eno.jpeg"
            style={{ height: 100, width: "100%" }}
          />
        </Grid>
        <Grid item xs="12" md="6">
          <Typography variant="h4" style={{ height: 100, width: "100%" }}>
            Brian Eno
          </Typography>
          <Typography variant="body1">
            Brian Eno is a producer, writer, and multi-instrumental musician,
            legendary both in his own right as a pioneer of ambient music, and
            in the work he's done across his vast career with others, like Bryan
            Ferry's band Roxy Music. He is perhaps best known in mainstream
            circles for his incomparable synthesizer and soundscapes work on
            David Bowie's "Berlin Trilogy" of albums - Low, Heroes, and Lodger -
            all produced by Tony Visconti with visionary help from Eno, and for
            his work with artists like U2, The Talking Heads, Depeche Mode, and
            King Crimson.
            <br />
            <br />
            A self-described "non-musician", Eno has helped introduce unique
            conceptual approaches and recording techniques to contemporary
            music.He has been described as one of popular music's most
            influential and innovative figures.
            <br />
            <br />
            Notable records that Eno has produced include: Talking Heads Top 20
            album 'Remain in Light' (1980) and U2's chart-topping albums
            'Unforgettable Fire' (1984), 'The Joshua Tree' (1987), and 'Achtung
            Baby' (1991).
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      {/* ------------------------------ */}

      <Grid container spacing="4">
        <Grid item xs="12" md="6">
          <Image
          className="staff-pic"
            src="/Assets/img/staff-pics/george-clinton.jpg"
            style={{ height: 100, width: "100%" }}
          />
        </Grid>
        <Grid item xs="12" md="6">
          <Typography variant="h4" style={{ height: 100, width: "100%" }}>
            George Clinton
          </Typography>
          <Typography variant="body1">
            George Clinton revolutionized funk and R&B at large as the
            mastermind of Parliament and Funkadelic. Versed in gospel, doo wop,
            and soul, Clinton -- a singer, songwriter, bandleader, and master
            conceptualist -- scored his first hit as co-writer and lead vocalist
            of the Parliaments' "(I Wanna) Testify" (1967), a fiery if tame
            precursor to what he and his ever-changing collective unleashed the
            following decade, highlighted by a clutch of animated and
            everlasting funk classics that topped the R&B chart.
            <br />
            <br />
            While P-Funk temporarily laid dormant, Clinton went solo with
            Computer Games (1982), the source of another number one R&B hit,
            "Atomic Dog," leading to three additional albums for Capitol. A
            hip-hop godfather, his P-Funk and solo recordings have been sampled
            innumerable times, and he has worked in the flesh with many of those
            whose creativity he has fueled, from Digital Underground and Snoop
            Dogg to OutKast and Kendrick Lamar.
            <br />
            <br />
            If there was a Mount Rushmore for funk, Clinton would no doubt be
            part of the sculpture between the likes of James Brown and Sly
            Stone.
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      {/* ------------------------------ */}

      <Grid container spacing="4" >
        <Grid item xs="12" md="6">
          <Image
          className="staff-pic"
            src="/Assets/img/staff-pics/spector.jpg"
            style={{ height: 100, width: "100%" }}
          />
        </Grid>
        <Grid item xs="12" md="6">
          <Typography variant="h4" style={{ height: 100, width: "100%" }}>
            Phil Spector
          </Typography>
          <Typography variant="body1">
            Undoubtedly one of the single most important and influential
            producers in the history of rock music, Phil Spector's "Wall Of
            Sound" stands as a milestone in recording history. Spector raised
            pop production's ambition and production by overdubbing scores of
            musicians to create a massive roar. It changed the course of pop
            record producing and produced some of rock's best loved music.
            <br />
            <br />
            To an extent that had never been imagined in rock & roll, Spector
            pumped his records full of orchestration -- strings, horns, rattling
            percussion -- that coalesced into teenage symphonies, never
            overwhelming the material or the passionate vocals. Often called a
            mad genius because of his eccentric and temperamental behavior,
            Spector's idiosyncrasies were almost always validated by the
            artistic and commercial results of his sessions, which combined
            dozens of instruments and innovative production techniques into end
            products which only he could combine into works of art.
            <br />
            <br />
            His influence was immense, not only in the dozens of imitation Wall
            of Sound productions (some very accurate and worthy, it must be
            added) that flooded the market between 1962 and 1965, but as an
            inspiration to Brian Wilson of the Beach Boys, Rolling Stones
            producer Andrew Loog Oldham, and others.
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}

export default Staff1;
