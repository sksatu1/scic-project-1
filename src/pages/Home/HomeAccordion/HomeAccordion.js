import React from 'react';
import './HomeAccordion.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Grid } from '@mui/material';
import qnaImg from '../../../images/253291177_2929373403968987_7283291983072088611_n.png';

const HomeAccordion = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Container sx={{ my: 10 }}>
            <Typography sx={{ fontWeight: '900', fontSize: '40px' }}>
                Frequently Asked <span>Questions</span>
            </Typography>
            <Grid container spacing={2}
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <Grid item xs={12} md={5}>
                    <img style={{ width: '100%' }} src={qnaImg} alt="" />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ color: 'text.secondary' }} className="question-answer">What are the most important things I should know about riding bike?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="question-answer">
                                Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ color: 'text.secondary' }} className="question-answer">
                                How can I tell if my helmet is old and I need a new one?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="question-answer">
                                Bear in mind that if the helmet did its job most people would tell you that they did not even hit their head, or did not hit their head that hard. And the thin shells on most helmets now tend to hide any dents in the foam. But if you can see marks on the shell or measure any foam crush at all, replace the helmet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ color: 'text.secondary' }} className="question-answer">
                                My bike has been in storage. Is it safe to ride?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="question-answer">
                                Give it a test ride. Make sure the brakes work OK and that the wheels don't rub as they turn. Try a few corners to make sure there are no odd handling issues.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ color: 'text.secondary' }} className="question-answer">What rules should I follow when riding bike?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="question-answer">
                                1. Be visible at all times. - Wear bright and visible clothes. Reflective stripes ads viability. Always stay out of blind zones. Alert other drivers before entering their blind zone. <br />
                                2. Be predictable. - Others on the road must be able to predict your next move. Give proper signals before changing a lane or taking deviation. <br />
                                3. Everyone in the road is dumb and partially blind. - Well, just imagine so and be prepared for an unexpected turn or braking.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeAccordion;