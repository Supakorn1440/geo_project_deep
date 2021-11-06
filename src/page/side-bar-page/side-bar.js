import React from "react";
import clsx from "clsx";
import { makeStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Dashboard from "../dashboard/dashboard-page";
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';
import ThreeDRotationRoundedIcon from '@material-ui/icons/ThreeDRotationRounded';
import './side-bar-page.css';
import { Route, Link } from "react-router-dom";
import Login from './../login/login';
import Map2D from "../page-2D/map-2D";
import ImportDataPage from "../import/import-data";
import Map3D from "../page-3D/map-3D";
import Map3D2563 from "../page-3D/map-3D-2563";
import Map3D2562 from "../page-3D/map-3D-2562";
import Map3D2561 from "../page-3D/map-3D-2561";
import Map2D2563 from "../page-2D/map-2D2563";
import Map2D2562 from "../page-2D/map-2D2562";
import Map2D2561 from "../page-2D/map-2D2561";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import About from '../About/About';
import RecentActorsSharpIcon from '@material-ui/icons/RecentActorsSharp';
import BarChartSharpIcon from '@material-ui/icons/BarChartSharp';
import Main3D from "../page-3D/Main3D";


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
    },
}));

export default function SiderBar() {
    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);

   

    const handleDrawerClose = () => {
        open ? setOpen(false) : setOpen(true);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                {/* <Toolbar>
                   
                    <Typography variant="h6" noWrap>
                        Mini variant drawer
                    </Typography>
                </Toolbar> */}
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {open ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <Link to="/">
                    <div className="d-flex justify-content-center">
                        <div className={open ? "imgSideLogoBig" : "imgSideLogoSmall"} />
                    </div>
                </Link>
                
                <List>
                    <Link to="/">
                        <ListItem button key={'Home'} className="iconSide" style={{ marginTop: 50 }}>
                            <ListItemIcon >
                                <HomeIcon style={{ fontSize: 38 }} />
                            </ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </Link>
                    <Link to="/dashboard">
                        <ListItem button key={'Dashboard'} className="iconSide" style={{ marginTop: 50 }}>
                            <ListItemIcon >
                                <BarChartSharpIcon style={{ fontSize: 38 }} />
                            </ListItemIcon>
                            <ListItemText primary={'Dashboard'} />
                        </ListItem>
                    </Link>
                    <Link to='/map2D'>
                        <ListItem button key={'2D'} className="iconSide" style={{ marginTop: 50 }}>
                            <ListItemIcon>
                                <MapIcon style={{ fontSize: 38 }} />
                            </ListItemIcon>
                            <ListItemText primary={'2D'} />
                        </ListItem>
                    </Link>
                    <Link to='/Main3D'>
                        <ListItem button key={'3D'} className="iconSide" style={{ marginTop: 50 }}>
                            <ListItemIcon>
                                <ThreeDRotationRoundedIcon style={{ fontSize: 38 }} />
                            </ListItemIcon>
                            <ListItemText primary={'3D'} />
                        </ListItem>
                    </Link>
                    <Link to='/ImportDataPage'>
                        <ListItem button key={'importData'} className="iconSide" style={{ marginTop: 50 }}>
                            <ListItemIcon>
                                    <ImportExportIcon style={{ fontSize: 38 }} />
                            </ListItemIcon>
                            <ListItemText primary={'Import Data'} />
                        </ListItem>
                    </Link>
                    <Link to='/About' >
                        <ListItem button key={'About'} className="iconSide" style={{ marginTop: 50 }}>
                            <ListItemIcon>
                                    <RecentActorsSharpIcon style={{ fontSize: 38 }} />
                            </ListItemIcon>
                            <ListItemText primary={'About'} />
                        </ListItem>
                    </Link>
                    {/* <Link to='/Import'>
                        <ListItem button key={'importData'} className="iconSide" style={{ marginTop: 50 }}>
                            <ListItemIcon>
                                <ImportExportRoundedIcon style={{ fontSize: 38 }} />
                            </ListItemIcon>
                            <ListItemText primary={'Import Data'} />
                        </ListItem>
                    </Link> */}

                </List>


            </Drawer>
            <main className={classes.content}>
                {/* <div className={classes.toolbar} /> */}
                {/* <Dashboard /> */}
                <Route exact path="/"><Login /></Route>
                <Route path="/dashboard"><Dashboard /></Route>
                <Route path="/map2D"><Map2D /></Route>
                <Route path="/map3D"><Map3D /></Route>
                <Route path="/ImportDataPage"><ImportDataPage/></Route>
                <Route path="/About"><About/></Route>
                <Route path="/Map3D2563"  component={Map3D2563}/>
                <Route path="/Map3D2562"  component={Map3D2562}/>
                <Route path="/Map3D2561"  component={Map3D2561}/>
                <Route path="/Map2D2561"  component={Map2D2561}/>
                <Route path="/Map2D2562"  component={Map2D2562}/>
                <Route path="/Map2D2563"  component={Map2D2563}/>
                <Route path="/Main3D"  component={Main3D}/>
                
                 
            </main>
        </div>
    );
}
