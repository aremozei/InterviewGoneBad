export default interface IRoute {
    path: string,
    name: string,
    exact: boolean,
    component: any,
    query?: string,
    props?: any
};