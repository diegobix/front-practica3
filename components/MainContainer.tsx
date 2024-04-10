import { ComponentChildren, FunctionComponent } from "preact";

const MainContainer: FunctionComponent<{ children: ComponentChildren }> = (
  { children },
) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default MainContainer;
