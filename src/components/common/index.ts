/**
 * 批量注册基础组件
 * @param app Vue实例
 */
export const useCommonComponents = (app: any) => {
  const components = import.meta.glob('./*.vue', { import: 'default', eager: true });

  for (const path in components) {
    const name: Array<any> = path.match(/^\.\/(\S*)\.vue$/)!;
    app.component(name[1], components[path]);
  }
}