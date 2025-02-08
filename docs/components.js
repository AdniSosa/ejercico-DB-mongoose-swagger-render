//componentes reutilizables para la documentación

const components = {
    schemas:{
        Task:{
            type:'object',
            properties:{
                _id:{
                    type:'objectId',
                    description:"task identification number",
                    example:"6201064b0028de7866e2b2c4"
                },
                title:{
                    type:'string',
                    description:"task description",
                    example:"Cook"
                },
                completed:{
                    type:'boolean',
                    description:"true or false depending on whether the tak has been completed",
                    example:"false"
                },
            }
        }
    }
}

module.exports = {
    components
}
