class SuperShape3D {
    constructor(ss1, ss2, total, r) {
        this.ss1 = ss1;
        this.ss2 = ss2;
        this.total = total;
        this.r = r;
        //Acts as a two dimensional array with [total + 1][total + 1]
        this.vertices = Array((total + 1) * (total + 1));
    }

    computeVertices() {
        for (let i = 0; i < this.total + 1; i++) {
            const lat = map(i, 0, this.total, -HALF_PI, HALF_PI);
            const r2 = this.ss2.computeRadius(lat)
            for (let j = 0; j < this.total + 1; j++) {
              const lon = map(j, 0, this.total, -PI, PI);
              const r1 = this.ss1.computeRadius(lon)
              const x = this.r * r1 * cos(lon) * r2 * cos(lat);
              const y = this.r * r1 * sin(lon) * r2 * cos(lat);
              const z = this.r * r2 * sin(lat);
        
              //This index works as if it were [i][j]
              const index = i + j * (this.total + 1);
              this.vertices[index] = createVector(x, y, z);
            } 
          }
    }

    draw(material) {
        if(material === "mesh" || material === "solid") {
            if(material === "mesh") {
                noFill();
            }
            for (let i = 0; i < this.total; i++) {
                beginShape(TRIANGLE_STRIP);
                for (let j = 0; j < this.total + 1; j++) {
                    const index1 = i + j * (this.total + 1);
                    const v1 = this.vertices[index1];
                    vertex(v1.x, v1.y, v1.z);
                    const index2 = (i + 1) + j * (this.total + 1);
                    const v2 = this.vertices[index2];
                    vertex(v2.x, v2.y, v2.z);
                }
                endShape();
            }
        } else {
            for (let i = 0; i < this.total; i++) {
                for (let j = 0; j < this.total + 1; j++) {
                    const index1 = i + j * (this.total + 1);
                    const v1 = this.vertices[index1];
                    const index2 = (i + 1) + j * (this.total + 1);
                    const v2 = this.vertices[index2];
                    push();
                    translate(v1.x, v1.y, v1.z);
                    box(5);
                    pop();
                }
            }
        }
    }
} 