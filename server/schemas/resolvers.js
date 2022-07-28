const { User, Customer, Order, Service, Pet } = require('../../server/models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('thoughts')
        .populate('friends');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },
    customer: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Customer.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { _id }) => {
      return Customer.findOne({ _id });
    }
  }
};

module.exports = resolvers;
