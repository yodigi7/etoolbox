import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import QRCode from 'qrcode';

import { Box, Button, Card, CardContent, Grid, Link, TextField, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import SelectAllIcon from '@material-ui/icons/SelectAll';

import { setTextAction } from '../../actions/text-actions';
import FeatureTitle from '../../components/FeatureTitle';
import { AppState } from '../../reducers';

import * as services from './services';
import CopyButton from '../../components/CopyButton';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
    },
    doc: {
        margin: theme.spacing(2),
    },
    toolbar: {
        margin: 0,
        padding: 0,
        '& > *': {
            marginLeft: theme.spacing(1),
        },
    },
    qrOptions :{
        fontFamily: 'monospace',
    },
    generatedQR: {
        padding: theme.spacing(2),
    },
}));

interface Props {
    width: Breakpoint;
    inputText?: string;
    inputOptions?: string;
    storeInputText: (name: string, value: string) => void;
}

const DEFAULT_OPTIONS = {
    errorCorrectionLevel: 'H',
    type: 'image/png',
    width: 200,
    quality: 0.3,
    margin: 1,
    color: {
        dark: '#000000FF',
        light: '#FFFFFFFF',
    },
};

const QRCodeGenerator: React.FC<Props> = (props: Props) => {
    const title = 'QR Code generator';
    const classes = useStyles();
    const { inputText, inputOptions, storeInputText } = props;
    const [imgDataURL, setImgDataURL] = React.useState('');

    function generate() {
        if (!inputText) {
            return;
        }

        const opts = inputOptions ? JSON.parse(inputOptions) : DEFAULT_OPTIONS;
        QRCode.toDataURL(inputText, opts, (err, url) => {
            if (err) {
                throw err;
            }

            setImgDataURL(url);
            storeInputText('lastQRCodeOptions', services.jsonFormat(JSON.stringify(opts)));
        });
    }

    return (
        <>
            <Helmet title={title} />
            <div className={classes.root}>
                <FeatureTitle iconType={SelectAllIcon} title={title} />

                <Typography align='center' className={classes.doc}>
                    <Link target='_blank' rel='noreferrer' href='https://www.npmjs.com/package/qrcode#qr-code-options'>
                        Generation options documentation available here!
                    </Link>
                </Typography>

                <form noValidate autoComplete='off'>
                    <Grid container spacing={1}>
                        <Grid item md={6} sm={12} xs={12}>
                            <TextField
                                autoFocus={isWidthUp('md', props.width)}
                                label='Text to store into QR Code'
                                placeholder='Paste or type the content here'
                                multiline
                                rows={10}
                                variant='outlined'
                                margin='normal'
                                fullWidth={true}
                                value={inputText}
                                onChange={(e) => storeInputText('lastQRCodeTextValue', e.target.value)}
                            />
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <TextField
                                label='QR Code generation options'
                                multiline
                                rows={10}
                                variant='outlined'
                                margin='normal'
                                fullWidth={true}
                                InputProps={{
                                    classes: {
                                        input: classes.qrOptions,
                                    },
                                }}
                                value={inputOptions}
                                onChange={(e) => storeInputText('lastQRCodeOptions', e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </form>

                <Toolbar className={classes.toolbar}>
                    <Box display='flex' flexGrow={1}></Box>
                    <CopyButton data={imgDataURL} />
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={generate}
                        disabled={!inputText}
                        endIcon={<SelectAllIcon />}
                    >
                        Generate
                    </Button>
                </Toolbar>

                {imgDataURL && (
                    <Card className={classes.generatedQR}>
                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <img src={imgDataURL} alt='QR Code' />
                        </Box>
                        <CardContent>
                            <TextField
                                label='Full img tag'
                                fullWidth
                                value={`<img alt="QR Code" src="${imgDataURL}"/>`}
                                margin='normal'
                                variant='outlined'
                            />
                            <TextField
                                label="QR Code. Copy-paste into 'src' attribute"
                                fullWidth
                                value={imgDataURL}
                                margin='normal'
                                variant='outlined'
                                multiline
                                rows='8'
                            />
                        </CardContent>
                    </Card>
                )}
            </div>
        </>
    );
};

export function mapStateToProps(state: AppState) {
    return {
        inputText: state.textInputs['lastQRCodeTextValue'],
        inputOptions: state.textInputs['lastQRCodeOptions'],
    };
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {
        storeInputText: (name: string, value: string) => dispatch(setTextAction(name, value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(QRCodeGenerator));
