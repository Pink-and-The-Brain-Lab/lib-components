export class Country {
    constructor(name = '', dial_code = '', code = '', latitude = 0, longitude = 0) {
        this.name = name;
        this.dial_code = dial_code;
        this.code = code;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    get flag() {
        return this.code.toLowerCase();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9waG9uZS1udW1iZXIvbW9kZWwvY291bnRyeS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxNQUFNLE9BQU8sT0FBTztJQU9oQixZQUFZLElBQUksR0FBRyxFQUFFLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQUUsU0FBUyxHQUFHLENBQUM7UUFDekUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIENvdW50cnkge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGlhbF9jb2RlOiBzdHJpbmc7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBkaWFsX2NvZGUgPSAnJywgY29kZSA9ICcnLCBsYXRpdHVkZSA9IDAsIGxvbmdpdHVkZSA9IDApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGlhbF9jb2RlID0gZGlhbF9jb2RlO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGxhdGl0dWRlO1xyXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gbG9uZ2l0dWRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmbGFnKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==