// Action types
import { CommonActions, CustomerActions, SupervisorActions } from "./StoreActions"

let initialState = {
    // Current user
    currentUserView: "home",        // Any user starts at home page
    currentUserEmail: "none",       // No sense in tracking a visitors e-mail
    currentUserRights: "visitor",   // Any user starts browsing as a visitor
    currentUserLoggedIn: false,     // Any user starts as not logged in

    // Credentials
    UACData: [
        // {email, password (as plain text, no need to be serious here), rights (as in usage rights)}
        { email: "user@example.com", password: "user", rights: "customer" },
        { email: "admin@example.com", password: "admin", rights: "supervisor" },
        // email IS PRIMARY KEY ALWAYS
    ],

    // Static site
    SiteData: {
        products: [
            // {id, name, description, price, media (relative to src folder), localMedia (is media locally imported by webpack?), amount}
            { id: 0, name: "Biscoitos Caninos", description: "Deliciosos agrados de qualidade para cachorros", price: 10.0, media: "./media/product1.jpg", localMedia: true, amount: 1000 },
            { id: 1, name: "Bola de Tênis", description: "Bola verde que quica", price: 10.0, media: "./media/product2.jpg", localMedia: true, amount: 1000 },
            { id: 2, name: "Coleira", description: "Coleira de couro sintético", price: 10.0, media: "./media/product3.jpg", localMedia: true, amount: 1000 },
            { id: 3, name: "Erva de Gato", description: "Erva recreativa ressequida para gatos", price: 10.0, media: "./media/product4.jpg", localMedia: true, amount: 0 },
            { id: 4, name: "Guia", description: "Guia para coleiras padrão", price: 10.0, media: "./media/product5.JPG", localMedia: true, amount: 1000 },
            { id: 5, name: "Petisco de Gato", description: "Deliciosos agrados de qualidade para gatos", price: 10.0, media: "./media/product6.jpg", localMedia: true, amount: 1000 },
            { id: 6, name: "Ração", description: "Ração de primeira qualidade", price: 10.0, media: "./media/product7.jpg", localMedia: true, amount: 1000 }
        ],
        services: [
            // {id, name, description, media (relative to src folder), localMedia (is media locally imported by webpack?), available}
            { id: 0, name: "Banho", description: "Banho com xampu hipoalergênico para gatos e cães", media: "./media/service1.jpg", available: true, localMedia: true },
            { id: 1, name: "Corte de Unhas", description: "Cuidados com a unha de seu gato com segurança e sem machucá-lo", media: "./media/service2.jpg", available: false, localMedia: true },
            { id: 2, name: "Massagem", description: "Massagem relaxante para seu cão", media: "./media/service3.jpg", available: true, localMedia: true },
            { id: 3, name: "Tosa", description: "Corte dos pêlos do seu animal", media: "./media/service4.jpg", available: true, localMedia: true }
        ],
    },

    // Customer specific
    CustomerData: [
        {
            // Personal data
            name: "Cliente Exemplo",
            email: "user@example.com", // Primary identifier

            // State trackers
            animals: [
                // {id, name, race, media (relative to src folder), localMedia (is media locally imported by webpack?)}
                { id: 0, name: "Felicloper", race: "Bernese", media: "./media/dog1.jpg", localMedia: true },
                { id: 1, name: "Glauber", race: "McNab", media: "./media/dog2.jpg", localMedia: true },
                { id: 2, name: "Gustavo", race: "Buldogue", media: "./media/dog3.jpg", localMedia: true },
                { id: 3, name: "Caramelo", race: "Harrier", media: "./media/dog4.jpg", localMedia: true },
                { id: 4, name: "Carolhos", race: "SRD", media: "./media/dog5.jpg", localMedia: true },
                { id: 5, name: "Nerso", race: "Labrador", media: "./media/dog6.jpg", localMedia: true },
                { id: 6, name: "Sabrino", race: "Pharaoh Hound", media: "./media/dog7.jpg", localMedia: true },
                { id: 7, name: "Kik", race: "Chihuahua", media: "./media/dog8.jpg", localMedia: true },
                { id: 8, name: "Frederico", race: "Siamês", media: "./media/cat1.jpg", localMedia: true },
                { id: 9, name: "Fofinho", race: "Maine Coon", media: "./media/cat2.jpg", localMedia: true }
            ],
            appointments: [
                // {id, serviceId, serviceName, animalId, animalName, date (as a Date object), status, message}
                { id: 0, serviceId: 0, serviceName: "Banho", animalId: 6, animalName: "Sabrino", date: new Date("06/06/2018 14:00:00 GMT-3"), status: "pending", message: "" },
                { id: 1, serviceId: 2, serviceName: "Massagem", animalId: 5, animalName: "Nerso", date: new Date("06/24/2019 14:00:00 GMT-3"), status: "approved", message: "Aprovado pelo supervisor (sujeito à mudanças)" },
                { id: 2, serviceId: 1, serviceName: "Cortar Unha", animalId: 9, animalName: "Fofinho", date: new Date("08/06/2018 14:00:00 GMT-3"), status: "pending", message: "" },
                { id: 3, serviceId: 3, serviceName: "Tosa", animalId: 0, animalName: "Felicloper", date: new Date("06/04/2018 14:00:00 GMT-3"), status: "revoked", message: "Requisição negada: emergência de plantão (nenhum doutor disponivel)" },
                { id: 4, serviceId: 3, serviceName: "Tosa", animalId: 0, animalName: "Felicloper", date: new Date("06/09/2018 14:00:00 GMT-3"), status: "revoked", message: "Requisição negada: nenhum horário indisponível" },
                { id: 1, serviceId: 0, serviceName: "Banho", animalId: 5, animalName: "Nerso", date: new Date("06/28/2019 14:00:00 GMT-3"), status: "approved", message: "Aprovado pelo supervisor (sujeito à mudanças)" },
                /*
                    status:
                        - pending: not yet processed
                        - revoked: processed and denied
                        - approved: processed and approved
                        - we're planning to add "edited" as well but we still don't have the logic very clear
                 */
            ],
            shoppingCart: [
                // {itemId, itemName, itemPrice, itemAmount}
                { itemId: 1, itemName: "Bola de Tênis", itemPrice: 10.0, itemAmount: 3 },
                { itemId: 6, itemName: "Ração", itemPrice: 10.0, itemAmount: 15 },
                { itemId: 2, itemName: "Coleira", itemPrice: 10.0, itemAmount: 1 },
            ],
        },
    ],
}

// TODO decompose into separate reducers
function petShopApp(state, action) {
    // Can also be done via default value
    if (typeof (state) === "undefined") {
        return initialState
    }

    switch (action.type) {

    // Common action reducers
    case CommonActions.USER_SIGNIN:
        return Object.assign({}, state, {
            currentUserView: action.payload.userData.nextView,
            currentUserEmail: action.payload.userData.userEmail,
            currentUserRights: action.payload.userData.userRights,
            currentUserLoggedIn: true,
        })

    case CommonActions.USER_SIGNUP:
        return Object.assign({}, state, {
            currentUserView: action.payload.userData.nextView,
            currentUserEmail: action.payload.userData.userEmail,
            currentUserRights: action.payload.userData.userRights,
            currentUserLoggedIn: true,
            UACData: [
                ...state.UACData,
                { email: action.payload.userData.userEmail, password: action.payload.userData.userPassword, rights: action.payload.userData.userRights }
            ],
            CustomerData: [
                ...state.CustomerData,
                { name: action.payload.userData.userName, email: action.payload.userData.userEmail, animals: [], appointments: [], shoppingCart: [] }
            ]
        })

    case CommonActions.USER_LOGOUT:
        return Object.assign({}, state, {
            currentUserView: action.payload.userData.nextView,
            currentUserEmail: action.payload.userData.userEmail,
            currentUserRights: action.payload.userData.userRights,
            currentUserLoggedIn: false,
        })

    case CommonActions.CHANGE_CURRENT_VIEW:
        return Object.assign({}, state, {
            currentUserView: action.payload.nextView,
        })

    // Customer action reducers
    case CustomerActions.PROFILE_EDIT:
        return Object.assign({}, state, {
            UACData: state.UACData.map(user => {
                if (user.email === action.payload.userData.userEmail) {
                    return Object.assign({}, user, {
                        email: action.payload.userData.userEmail,
                        password: action.payload.userData.userPassword,
                    })
                }
                return user
            }),
            CustomerData: state.CustomerData.map(customer => {
                if (customer.email === action.payload.userData.userEmail) {
                    return Object.assign({}, customer, {
                        name: action.payload.userData.userName,
                        email: action.payload.userData.userEmail,
                    })
                }
                return customer
            })
        })

    case CustomerActions.PET_ADD:
        return Object.assign({}, state, {
            CustomerData: state.CustomerData.map(customer => {
                if (customer.email === action.payload.userEmail) {
                    return Object.assign({}, customer, {
                        animals: [
                            ...customer.animals,
                            {
                                id: (customer.animals.length > 0) ? (customer.animals[customer.animals.length-1].id + 1) : 0,
                                name: action.payload.petData.name,
                                race: action.payload.petData.race,
                                media: action.payload.petData.media,
                                localMedia: action.payload.petData.localMedia,
                            }
                        ]
                    })
                }
                // Otherwise keep old state
                return customer
            })
        })

    // TODO Maybe a filter followed by an insertion will work best
    case CustomerActions.PET_EDIT:
        return Object.assign({}, state, {
            CustomerData: state.CustomerData.map(customer => {
                if (customer.email === action.payload.userEmail) {
                    return Object.assign({}, customer, {
                        animals: customer.animals.map(animal => {
                            if (animal.id === action.payload.petData.id) {
                                return Object.assign({}, animal, {
                                    id: action.payload.petData.id,
                                    name: action.payload.petData.name,
                                    race: action.payload.petData.race,
                                    media: action.payload.petData.media,
                                    localMedia: action.payload.petData.localMedia,
                                })
                            }
                            // Otherwise keep old state
                            return animal
                        })
                    })
                }
                // Otherwise keep old state
                return customer
            })
        })

    case CustomerActions.PET_REMOVE:
        return Object.assign({}, state, {
            CustomerData: state.CustomerData.map(customer => {
                if (customer.email === action.payload.userEmail) {
                    return Object.assign({}, customer, {
                        animals: customer.animals.filter(animal => {
                            return (animal.id !== action.payload.petData.id)
                        })
                    })
                }
                // Otherwise keep old state
                return customer
            })
        })

    case CustomerActions.STORE_ADD_TO_CART:
        return Object.assign({}, state, {
            // Add item to user's cart
            CustomerData: state.CustomerData.map(customer => {
                if (customer.email === action.payload.userEmail) {
                    return Object.assign({}, customer, {
                        shoppingCart: [
                            ...customer.shoppingCart,
                            {
                                itemId: action.payload.itemData.itemId,
                                itemName: action.payload.itemData.itemName,
                                itemPrice: action.payload.itemData.itemPrice,
                                itemAmount: action.payload.itemData.itemAmount,
                            }
                        ]
                    })
                }
                // Otherwise keep old state
                return customer
            }),
            // Recalculate amount in store
            SiteData: Object.assign({}, state.SiteData, {
                products: state.SiteData.products.map(product => {
                    if (product.id === action.payload.itemData.itemId) {
                        return Object.assign({}, product, {
                            amount: (product.amount - action.payload.itemData.itemAmount)
                        })
                    }
                    // Otherwise keep old state
                    return product
                })
            })
        })

    case CustomerActions.STORE_EDIT_CART_ITEM:
        return Object.assign({}, state, {
            // Add item to user's cart
            CustomerData: state.CustomerData.map(customer => {
                if (customer.email === action.payload.userEmail) {
                    return Object.assign({}, customer, {
                        shoppingCart: customer.shoppingCart.map(item => {
                            if (item.itemId === action.payload.itemData.itemId) {
                                return Object.assign({}, item, {
                                    itemId: item.itemId,
                                    itemName: item.itemName,
                                    itemPrice: item.itemPrice,
                                    itemAmount: (item.itemAmount + action.payload.itemData.itemAmount),
                                })
                            }
                            // Otherwise keep old state
                            return item
                        })
                    })
                }
                // Otherwise keep old state
                return customer
            }),
            // Recalculate amount in store
            SiteData: Object.assign({}, state.SiteData, {
                products: state.SiteData.products.map(product => {
                    if (product.id === action.payload.itemData.itemId) {
                        return Object.assign({}, product, {
                            amount: (product.amount - action.payload.itemData.itemAmount)
                        })
                    }
                    // Otherwise keep old state
                    return product
                })
            })
        })

    case CustomerActions.STORE_REMOVE_FROM_CART:
        return Object.assign({}, state, {
            // Remove item from user's cart
            CustomerData: state.CustomerData.map(customer=> {
                if (customer.email === action.payload.userEmail) {
                    return Object.assign({}, customer, {
                        shoppingCart: customer.shoppingCart.filter(item => {
                            return (item.itemId !== action.payload.itemData.itemId)
                        })
                    })
                }
                // Otherwise keep old state
                return customer
            }),
            // Recalculate amount in store
            SiteData: Object.assign({}, state.SiteData, {
                products: state.SiteData.products.map(product => {
                    if (product.id === action.payload.itemData.itemId) {
                        return Object.assign({}, product, {
                            amount: (product.amount + action.payload.itemData.itemAmount)
                        })
                    }
                    // Otherwise keep old state
                    return product
                })
            })
        })

    case CustomerActions.STORE_COMMIT_ON_PURCHASE:
        return Object.assign({}, state, {
            // Clear customer shopping cart
            CustomerData: state.CustomerData.map(customer => {
                if (customer.email === action.payload.userEmail) {
                    return Object.assign({}, customer, {
                        shoppingCart: []
                    })
                }
                // Otherwise keep old state
                return customer
            })
        })

    case CustomerActions.APPOINTMENT_ADD:
        return Object.assign({}, state, {
            CustomerData: state.CustomerData.map(customer => {
                if (customer.email === action.payload.userEmail) {
                    return Object.assign({}, customer, {
                        appointments: [
                            ...customer.appointments,
                            {
                                id: (customer.appointments.length > 0) ? (customer.appointments[customer.appointments.length-1].id + 1) : 0,
                                serviceId: action.payload.appointData.serviceId,
                                serviceName: action.payload.appointData.serviceName,
                                animalId: action.payload.appointData.animalId,
                                animalName: action.payload.appointData.animalName,
                                date: action.payload.appointData.date,
                                status: action.payload.appointData.status,
                                message: action.payload.appointData.message,
                            }
                        ]
                    })
                }
                // Otherwise keep old state
                return customer
            })
        })        

    case CustomerActions.APPOINTMENT_REMOVE:
        return Object.assign({}, state, {
            CustomerData: state.CustomerData.map(customer => {
                if (customer.email === action.payload.userEmail) {
                    return Object.assign({}, customer, {
                        appointments: customer.appointments.filter(appointment => {
                            return (appointment.id !== action.payload.appointData.id)
                        })
                    })
                }
                // Otherwise keep old state
                return customer
            })
        })

    // Supervisor action reducers
    // TODO TEST THIS
    case SupervisorActions.STOCKCTL_REG_INCLUDE:
        return Object.assign({}, state, {
            SiteData: Object.assign({}, state.SiteData, {
                products: [
                    ...state.SiteData.products,
                    {
                        id: (state.SiteData.products.length > 0) ? (state.SiteData.products[state.SiteData.products.length-1].id + 1) : 0,
                        name: action.payload.itemData.name,
                        price: action.payload.itemData.price,
                        amount: action.payload.itemData.amount,
                        description: action.payload.itemData.description,
                        media: action.payload.itemData.media,
                        localMedia: action.payload.itemData.localMedia,
                    }
                ]
            })
        })

    // TODO TEST THIS
    case SupervisorActions.STOCKCTL_EDIT:
        return Object.assign({}, state, {
            SiteData: Object.assign({}, state.SiteData, {
                products: state.SiteData.products.map(product => {
                    if (product.id === action.payload.itemData.id) {
                        return Object.assign({}, product, {
                            name: action.payload.itemData.name,
                            price: action.payload.itemData.price,
                            amount: action.payload.itemData.amount,
                            description: action.payload.itemData.description,
                            media: action.payload.itemData.media,
                            localMedia: action.payload.itemData.localMedia,
                        })
                    }
                    // Otherwise keep old state
                    return product
                })
            })
        })

    // TODO TEST THIS
    case SupervisorActions.STOCKCTL_REMOVE:
        return Object.assign({}, state, {
            SiteData: Object.assign({}, state.SiteData, {
                products: state.SiteData.products.filter(product => {
                    return (product.id !== action.payload.itemData.id)
                })
            })
        })

    // TODO ADDITIONAL REDUCERS

    default:
        return state
    }
}

export default petShopApp