/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const { response } = require('express');

const Thought = require('../model/Thoughts');

module.exports = {
  async createThought(request, response) {
    const { title, description } = request.body;

    const thought = await Thought.create({
      title,
      description,
    });
    return response.json(thought);
  },
  async findThoughts(request, response) {
    const thought = await Thought.findAll({ raw: true });
    // return response.render("Thoughts");
    return response.json(thought);
  },

  async findThought(request, response) {
    const { id } = request.params;
    const thought = await Thought.findByPk(id);

    return response.json(thought);
  },

  async update(request, response) {
    const { id } = request.params;
    const { title, description } = request.body;

    const thought = await Thought.update(
      {
        title,
        description,
      },
      {
        where: { id },
      },
    );

    return response.json({ menssage: 'Thought updated!' });
  },
  async deleteThought(request, response) {
    const { id } = request.params;
    const thought = await Thought.destroy({ where: { id } });

    return response.json({ menssage: 'User deleted!' });
  },

};
