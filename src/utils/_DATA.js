let users = {
    MarieCurie: {
        id: 'MarieCurie',
        name: 'Marie Curie',
        avatarURL: 'https://www.nobelprize.org/images/marie-curie-12879-content-portrait-mobile-tiny.jpg',
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionOne',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    NielBohr: {
        id: 'NielBohr',
        name: 'NielBohr',
        avatarURL: 'https://www.nobelprize.org/images/bohr-12929-portrait-mini-2x.jpg',
        answers: {
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    AlexanderFleming: {
        id: 'AlexanderFleming',
        name: 'Alexander Fleming',
        avatarURL: 'https://www.nobelprize.org/images/fleming-13037-portrait-mini-2x.jpg',
        answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "vthrdm985a262al8qx3do": 'optionTwo',
            "6ni6ok3ym7mf1p33lnez": 'optionOne'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
}

let questions = {
    "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'MarieCurie',
        timestamp: 1467166872634,
        optionOne: {
            votes: ['MarieCurie'],
            text: 'Have Tea with Breakfast',
        },
        optionTwo: {
            votes: [],
            text: 'have Coffee with Breaksfast'
        }
    },
    "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'AlexanderFleming',
        timestamp: 1468479767190,
        optionOne: {
            votes: [],
            text: 'become a scientist',
        },
        optionTwo: {
            votes: ['AlexanderFleming', 'MarieCurie'],
            text: 'become a accountant'
        }
    },
    "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'MarieCurie',
        timestamp: 1488579767190,
        optionOne: {
            votes: [],
            text: 'Research on Radiation',
        },
        optionTwo: {
            votes: ['MarieCurie'],
            text: 'Research on Astronomy'
        }
    },
    "loxhs1bqm25b708cmbf3g": {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'NielBohr',
        timestamp: 1482579767190,
        optionOne: {
            votes: [],
            text: 'Explore atomic structure',
        },
        optionTwo: {
            votes: ['MarieCurie'],
            text: 'Explore DNA structure'
        }
    },
    "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        author: 'NielBohr',
        timestamp: 1489579767190,
        optionOne: {
            votes: ['NielBohr'],
            text: 'Continue Scientific Research',
        },
        optionTwo: {
            votes: ['AlexanderFleming'],
            text: 'Settle for a job'
        }
    },
    "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'AlexanderFleming',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['AlexanderFleming'],
            text: 'write JavaScript',
        },
        optionTwo: {
            votes: ['NielBohr'],
            text: 'Research Pencillin'
        }
    },
}

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function
_getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...users}), 1000)
    })
}

export function _getQuestions() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...questions}), 1000)
    })
}

function formatQuestion({optionOneText, optionTwoText, author}) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOneText,
        },
        optionTwo: {
            votes: [],
            text: optionTwoText,
        }
    }
}


function formatUser({username, name, avatarURL}) {
    return {
        id: username,
        name,
        avatarURL,
        answers: [],
        questions: []
    }
}

export function _saveQuestion(question) {
    return new Promise((res, rej) => {
        const authedUser = question.author;
        const formattedQuestion = formatQuestion(question);

        setTimeout(() => {
            questions = {
                ...questions,
                [formattedQuestion.id]: formattedQuestion
            }

            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    questions: users[authedUser].questions.concat([formattedQuestion.id])
                }
            }

            res(formattedQuestion)
        }, 1000)
    })
}

export function _saveQuestionAnswer({authedUser, qid, answer}) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    answers: {
                        ...users[authedUser].answers,
                        [qid]: answer
                    }
                }
            }

            questions = {
                ...questions,
                [qid]: {
                    ...questions[qid],
                    [answer]: {
                        ...questions[qid][answer],
                        votes: questions[qid][answer].votes.concat([authedUser])
                    }
                }
            }

            res()
        }, 500)
    })
}

export function _saveNewUser(user) {
  
    return new Promise((res, rej) => {
        const formattedUser = formatUser(user)

        setTimeout(() => {
            users = {
                ...users,
                [formattedUser.id]: formattedUser
            }
            res(users)
        }, 1000)
    })
}
