class SuperShape {
    constructor(n1, n2, n3, m, a, b) {
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
        this.m = m;
        this.a = a;
        this.b = b;
    }

    computeRadius(phi) {
        let t1 = abs((1 / this.a) * cos(this.m * phi / 4));
        t1 = pow(t1, this.n2);
        let t2 = abs((1 / this.b) * sin(this.m * phi / 4));
        t2 = pow(t2, this.n3);
        const t3 = t1 + t2;
        const r = pow(t3, -1 / this.n1);
        return r;
    }
} 