const CustomerModel = require("../models/Customer");
const customer = require("../models/Customer");

exports.getAllCustomers = async () => {
    return await CustomerModel.find();
};

exports.createCustomer = async (customer) => {
    return await CustomerModel.create(customer);
};

exports.getCustomerById = async (id) => {
    return await CustomerModel.findById(id);
};

exports.updateCustomer = async (id, customer) => {
    return await CustomerModel.findByIdAndUpdate(id, customer);
};

exports.deleteCustomer = async (id) => {
    return await CustomerModel.findByIdAndDelete(id);
}