export class ObjectManipulator {

    constructor(protected obj: Record<string, unknown>) {}

    public set(key: string, value: unknown) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string) {
        return this.obj[key];
    }

    public delete(key: string) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}