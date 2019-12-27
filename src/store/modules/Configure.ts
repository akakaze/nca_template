import store from "electron-store";
import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { remote } from "electron";
import { KeyValue } from "../types";

@Module({
  name: "Configure",
  namespaced: true
})
export default class Configure extends VuexModule {
  private configName = `${remote.app.getName()}.config`;
  private config = new store();

  public get value() {
    return (key: string): string | number | boolean | null => {
      return this.config.get(key);
    };
  }

  public get isEmpty(): boolean {
    return this.config.size === 0;
  }

  /**
   * upadteConfig
   * @description 更新 localStorage 中的 configure
   * @private
   */
  private upadteConfig(): void {}

  @Mutation
  public init(config: KeyValue): void {
    this.config.store = config;
    this.upadteConfig();
  }

  @Mutation
  public update(key: string, value: string): void {
    this.config.set(key, value);
    this.upadteConfig();
  }

  @Mutation
  public clear(): void {
    this.config.clear();
  }
}
