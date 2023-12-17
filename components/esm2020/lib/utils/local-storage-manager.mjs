export class LocalStorageManager {
    static set(name, value) {
        LocalStorageManager.remove(name);
        const sanitizedName = LocalStorageManager.sanitizeName(name);
        const stringfyValue = JSON.stringify(value);
        window.localStorage.setItem(`#${sanitizedName}`, stringfyValue);
    }
    static get(name) {
        const sanitizedName = LocalStorageManager.sanitizeName(name);
        const value = window.localStorage.getItem(`#${sanitizedName}`);
        if (!!value) {
            const parsedValue = JSON.parse(value);
            return parsedValue;
        }
        return null;
    }
    static remove(name) {
        const sanitizedName = LocalStorageManager.sanitizeName(name);
        window.localStorage.removeItem(`#${sanitizedName}`);
    }
    static sanitizeName(name) {
        return name.trim().replace(/\s/gi, '_').replace(/[^\w\s]/gi, '').toUpperCase();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3V0aWxzL2xvY2FsLXN0b3JhZ2UtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQWdCLG1CQUFtQjtJQUVyQyxNQUFNLENBQUMsR0FBRyxDQUFJLElBQVksRUFBRSxLQUFRO1FBQ2hDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxNQUFNLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGFBQWEsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBRyxDQUFJLElBQVk7UUFDdEIsTUFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDVCxNQUFNLFdBQVcsR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sV0FBVyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBWTtRQUN0QixNQUFNLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25GLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2NhbFN0b3JhZ2VNYW5hZ2VyIHtcclxuXHJcbiAgICBzdGF0aWMgc2V0PFQ+KG5hbWU6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnJlbW92ZShuYW1lKTtcclxuICAgICAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gTG9jYWxTdG9yYWdlTWFuYWdlci5zYW5pdGl6ZU5hbWUobmFtZSk7XHJcbiAgICAgICAgY29uc3Qgc3RyaW5nZnlWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCMke3Nhbml0aXplZE5hbWV9YCwgc3RyaW5nZnlWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQ8VD4obmFtZTogc3RyaW5nKTogVCB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHNhbml0aXplZE5hbWUgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhbml0aXplTmFtZShuYW1lKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgIyR7c2FuaXRpemVkTmFtZX1gKTtcclxuICAgICAgICBpZiAoISF2YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRWYWx1ZTogVCA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgcmVtb3ZlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNhbml0aXplZE5hbWUgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhbml0aXplTmFtZShuYW1lKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCMke3Nhbml0aXplZE5hbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNhbml0aXplTmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBuYW1lLnRyaW0oKS5yZXBsYWNlKC9cXHMvZ2ksICdfJykucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJykudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxufSJdfQ==