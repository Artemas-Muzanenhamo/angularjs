interface ICustomerComponent {
    customers: ICustomer[];
}
declare class CustomerController implements ICustomerComponent {
    private customerService;
    customers: ICustomer[];
    constructor(customerService: ICustomerService);
}
