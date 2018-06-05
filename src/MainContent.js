import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import { PropTypes } from "prop-types"
import React from "react"
import { connect } from "react-redux"
import CustomerPetViewBehavior from "./CustomerPetViewBehavior"
import CustomerServiceViewBehavior from "./CustomerServiceViewBehavior"
import CustomerShopViewBehavior from "./CustomerShopViewBehavior"
import Avatar from "@material-ui/core/Avatar"
import { Paper } from "@material-ui/core"

const styles = theme => ({
    listRoot: {
        flexGrow: 1,
        marginTop: -2 * theme.spacing.unit,
        marginLeft: -1 * theme.spacing.unit,
        marginRight: -1 * theme.spacing.unit,
    },

    maxCard: {
        margin: 0,
        width: "100%"
    },
    maxMedia: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },

    card: {  // DON'T FORGET to add this to <Card /> for dimension control
        minWidth: 380,
        maxWidth: 480,
    },
    media: {
        height: 0,
        paddingTop: "76.25%",  // Originally, 56.25%, meaning 16:9 media
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
    },

    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },

    icon: {
        verticalAlign: "bottom",
        height: 20,
        width: 20,
    },

    details: {
        alignItems: "center",
    },

    column: {
        flexBasis: "33.33%",
    },

    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },

    link: {
        color: theme.palette.primary.main,
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    avatar: {
        margin: 3 * theme.spacing.unit,
    },
    bigAvatar: { // Customize AVATAR SIZE through this class
        width: 150,
        height: 150,
    },
})

/*
    DATA VIEW BUILDERS
 */
// TODO HERE
function CommonHomeScreenBehavior(props) {
    const {classes} = props

    let content = (
        <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={24}>
            <Card className={classes.maxCard}>
                <CardMedia
                    className={classes.maxMedia}
                    image={require("./media/sampleBanner.jpg")}
                    title="Seu melhor amigo"
                />
            </Card>
            <Grid item>
                <br />
                <Typography color="textSecondary" align="center" variant="display3">
                        Tudo para seu melhor amigo!
                </Typography>
            </Grid>
            <Grid item>
                <br />
                <Grid container justify="space-around" alignItems="center">
                    <Grid item>
                        <Grid container direction="column" alignItems="center">
                            <Typography color="textSecondary" align="center" variant="headline">
                            Faça seu cadastro
                            </Typography>
                            <Avatar
                                alt="Imagem do novo pet"
                                src={require("./media/sampleDog.png")}
                                className={classNames(classes.avatar, classes.bigAvatar)} />
                            <Typography color="textSecondary" align="center" variant="body1">
                            Cadastre-se e aproveite os recursos 
                                <br />
                            que nossa plataforma pode lhe oferecer
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" alignItems="center">
                            <Typography color="textSecondary" align="center" variant="headline">
                            Consulte nossa loja
                            </Typography>
                            <Avatar
                                alt="Imagem do novo pet"
                                src={require("./media/product3.jpg")}
                                className={classNames(classes.avatar, classes.bigAvatar)} />
                            <Typography color="textSecondary" align="center" variant="body1">
                            Produtos e alimentos da melhor qualidade
                                <br />
                            para seu melhor amigo de estimação
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" alignItems="center">
                            <Typography color="textSecondary" align="center" variant="headline">
                            Agende um serviço conosco
                            </Typography>
                            <Avatar
                                alt="Imagem do novo pet"
                                src={require("./media/service1.jpg")}
                                className={classNames(classes.avatar, classes.bigAvatar)} />
                            <Typography color="textSecondary" align="center" variant="body1">
                            Garantimos prestação de serviço
                                <br />
                            com o maior carinho e atenção
                                <br />
                            que seu pet pode merecer
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

    return (
        <div>
            {content}
        </div>
    )
}

CommonHomeScreenBehavior.propTypes = {
    classes: PropTypes.object.isRequired,
    userLoggedIn: PropTypes.bool.isRequired,
}


/*
    Common shop list view
 */
function CommonShopViewBehavior(props) {
    const { classes } = props

    return (
        <div className={classes.listRoot}>
            <Grid container spacing={24} justify="flex-start">
                {props.siteData.products.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.media}
                                image={item.localMedia ? require(`${item.media}`) : item.media}
                                title={"Serviço de " + item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    {`${item.name} - R$${item.price}`}
                                </Typography>
                                <Typography gutterBottom component="p">
                                    {item.description}
                                </Typography>
                                {item.amount > 0 ?
                                    <Typography variant="body1" align="right">
                                        <br />
                                        {`Disponibilidade: ${item.amount} unidades`}
                                    </Typography>
                                    :
                                    <Typography variant="body1" color="error" align="right">
                                        <br />
                                        Produto esgotado
                                    </Typography>
                                }
                            </CardContent>
                            <CardActions>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        {item.amount > 0 ?
                                            <Button size="small" color="primary"
                                                onClick={() => { props.onToggleDialog(true) }}>
                                        Comprar
                                            </Button>
                                            :
                                            <Button disabled size="small" color="primary">
                                        Comprar
                                            </Button>
                                        }
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

CommonShopViewBehavior.propTypes = {
    classes: PropTypes.object.isRequired,
    siteData: PropTypes.object.isRequired,
    onToggleDialog: PropTypes.func.isRequired,
}


/*
    Service list sub-component
 */
function CommonServiceViewBehavior(props) {
    const { classes } = props

    return (
        <div className={classes.listRoot}>
            <Grid container spacing={24} justify="flex-start">
                {props.siteData.services.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.media}
                                image={require(`${item.media}`)}
                                title={"Serviço de " + item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    {item.name}
                                </Typography>
                                <Typography gutterBottom component="p">
                                    {item.description}
                                </Typography>
                                {item.available ?
                                    <Typography variant="body1" align="right">
                                        <br />
                                        Disponível para agendamento
                                    </Typography>
                                    :
                                    <Typography variant="body1" color="error" align="right">
                                        <br />
                                        Serviço indisponível
                                    </Typography>
                                }
                            </CardContent>
                            <CardActions>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        {item.available ?
                                            <Button size="small" color="primary"
                                                onClick={() => { props.onToggleDialog(true) }}>
                                                Contratar
                                            </Button>
                                            :
                                            <Button disabled size="small" color="primary">
                                                Contratar
                                            </Button>
                                        }
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

CommonServiceViewBehavior.propTypes = {
    classes: PropTypes.object.isRequired,
    siteData: PropTypes.object.isRequired,
    onToggleDialog: PropTypes.func.isRequired,
}


/*
    MAIN COMPONENT CLASS
 */
class MainContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dialogOpen: false,
        }
    }

    handleToggleDialog(open) {
        this.setState({
            dialogOpen: open,
        })
    }

    buildMainView() {
        switch (this.props.userView) {
        // Visitor options
        case "home":
            return <CommonHomeScreenBehavior classes={this.props.classes}
                userLoggedIn={this.props.userLoggedIn} />

        case "shop":
            switch (this.props.userRights) {
            case "customer":
                return <CustomerShopViewBehavior />
            case "supervisor":
                // TODO HERE
                return <CommonShopViewBehavior classes={this.props.classes} siteData={this.props.siteData}
                    onToggleDialog={(open) => this.handleToggleDialog(open)} />
            default:
                return <CommonShopViewBehavior classes={this.props.classes} siteData={this.props.siteData}
                    onToggleDialog={(open) => this.handleToggleDialog(open)} />
            }

        case "services":
            switch (this.props.userRights) {
            case "customer":
                return <CustomerServiceViewBehavior />
            case "supervisor":
                // TODO HERE
                return <CommonServiceViewBehavior classes={this.props.classes} siteData={this.props.siteData}
                    onToggleDialog={(open) => this.handleToggleDialog(open)} />
            default:
                return <CommonServiceViewBehavior classes={this.props.classes} siteData={this.props.siteData}
                    onToggleDialog={(open) => this.handleToggleDialog(open)} />
            }

        // Customer options
        case "pets":
            return <CustomerPetViewBehavior />
        
        case "users":
            // TODO HERE
            return null

        case "shoppingCart":
            return <CustomerShopViewBehavior />

        case "appointments":
            return <CustomerServiceViewBehavior />

        default:
            return null
        }
    }

    render() {
        return (
            <div>
                <Dialog open={this.state.dialogOpen} aria-labelledby="visitor-dialog-title"
                    onClose={() => this.handleToggleDialog(false)}>

                    <DialogTitle id="visitor-dialog-title">
                        Operação Inválida
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText align="center" color="secondary">
                            Faça login ou cadastre-se para acessar os serviços
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.handleToggleDialog(false)} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>

                {this.buildMainView()}
            </div>
        )
    }
}

MainContent.propTypes = {
    classes: PropTypes.object.isRequired,
    userView: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    userRights: PropTypes.string.isRequired,
    userLoggedIn: PropTypes.bool.isRequired,
    siteData: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        userView: state.currentUserView,
        userEmail: state.currentUserEmail,
        userRights: state.currentUserRights,
        userLoggedIn: state.currentUserLoggedIn,
        customerData: state.CustomerData,
        siteData: state.SiteData
    }
}

// Inject styles, connect mappers with the redux store and export symbol
export default connect(mapStateToProps)(withStyles(styles)(MainContent))