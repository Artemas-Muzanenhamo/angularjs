interface ICustomerService {
    users(): ICustomer[];
}
declare class CustomerService implements ICustomerService {
    users(): ICustomer[];
}
