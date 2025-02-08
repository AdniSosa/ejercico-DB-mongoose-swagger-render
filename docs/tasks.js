// documentación de los diferentes endpoints

const { get } = require("mongoose");

const paths = {

  //CREATE TASK
  "/create": {
    post: {
      tags: {
        Tasks: "Create a task",
      },
      description: "Create Task",
      operationId: "createTask",
      parameters: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Task/properties/_id",
            }
          }
        }
      },
      responses: {
        201: {
          description: "Task created successfully",
          content:{
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
                example: {
                  id: "464sdksdk66sd78",
                  name: "Clean the house",
                  completed: false
                }
              }
            }
          }
        },
        500: {
          description: "Server error",
        }
      }
    }
  },

  //GET TASKS
  "/": {
    get: {
      tags: {
        Tasks: "Get all the tasks",
      },
      description: "Get all Tasks",
      operationId: "getTask",
      responses: {
        200: {
          description: "Response was successful",
          content:{
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
                example: {
                  id: "464sdksdk66sd78",
                  name: "Clean the house",
                  completed: false
                }
              }
            }
          }
        },
        500: {
          description: "Server error",
        },
      },
    }
  },

  //GET TASK BY ID
  "/id/{_id}": {
    get: {
      tags: {
        Tasks: "Gets a task by id",
      },
      description: "Gets a Task by id",
      operationId: "getTaskById",
      parameters: {
          name: "id",
          in: "path",
          description: "Task ID",
          required: true,
          schema: {
            $ref: '#/components/schemas/Task/properties/_id'
          },
      },
      requestBody: {},
      responses: {
        200: {
          description: "Task found successfully",
          content:{
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
                example: {
                  id: "464sdksdk66sd78",
                  name: "Clean the house",
                  completed: false
                }
              }
            }
          }
        },
        500: {
          description: "Server error",
        },
      }
    }
  },
  //MARK TASK AS COMPLETED (en este endpoint no le permitimos que edite el titulo)
  "/markAsCompleted/:_id": {
    put: {
      tags: {
        Tasks: "Mark the task completed searched by its id",
      },
      description: "Mark the task completed searched by its id",
      operationId: "markTaskCompleted",
      parameters: {
          name: "id",
          in: "path",
          description: "Task ID",
          required: true,
          schema: {
            $ref: '#/components/schemas/Task/properties/_id'
          },
      },
      requestBody: {},
      responses: {
        200: {
          description: "Task successfully updated",
          content:{
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
                example: {
                  id: "464sdksdk66sd78",
                  name: "Clean the house",
                  completed: false
                }
              }
            }
          }
        },
        500: {
          description: "Server error",
        },
      }
    }
  },

  //UPDATE TASK
  "/id/:_id": {
    put: {
      tags: {
        Tasks: "Change the title of the task searched by its id",
      },
      description: "Change the title of the task searched by its id",
      operationId: "changeTitleOfTheTask",
      parameters: {
          name: "id",
          in: "path",
          description: "Task ID",
          required: true,
          schema: {
            $ref: '#/components/schemas/Task/properties/_id'
          },
      },
      requestBody: {
        content: {
          "application/json": {
            schema: {$ref: "#/components/schemas/Task/properties/title"},
          },
        },
      },
      responses: {
        200: {
          description: "Task successfully updated",
          content:{
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
                example: {
                  id: "464sdksdk66sd78",
                  name: "Clean the house",
                  completed: false
                }
              }
            }
          }
        },
        500: {
          description: "Server error",
        },
      }
    }
  },

  //DELETE TASK
  "/id/:_id": {
    delete: {
      tags: {
        Tasks: "Delete the task searched by its id",
      },
      description: "Delete the task searched by its id",
      operationId: "deleteTask",
      parameters: {
          name: "id",
          in: "path",
          description: "Task ID",
          required: true,
          schema: {
            $ref: '#/components/schemas/Task/properties/_id'
          },
      },
      requestBody: {},
      responses: {
        200: {
          description: "Task successfully deleted",
        }
      },
      500: {
        description: "Server error",
      },
    }
  }
}  
  

module.exports = {
    paths
  }
  