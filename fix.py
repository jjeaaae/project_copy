import json
import shutil
import subprocess
import sys
from pathlib import Path

PINNED_VERSIONS = {
    "next": "14.2.3",
    "react": "18.3.1",
    "react-dom": "18.3.1",
}

def fix():
    root = Path(__file__).parent

    # 1. Pin versions in package.json
    pkg_path = root / "package.json"
    with open(pkg_path) as f:
        pkg = json.load(f)

    pkg["dependencies"].update(PINNED_VERSIONS)

    with open(pkg_path, "w") as f:
        json.dump(pkg, f, indent=2)
        f.write("\n")

    print("Pinned versions in package.json:")
    for name, version in PINNED_VERSIONS.items():
        print(f"  {name}: {version}")

    # 2. Delete node_modules and package-lock.json
    node_modules = root / "node_modules"
    if node_modules.exists():
        print("\nRemoving node_modules...")
        shutil.rmtree(node_modules)

    lock_file = root / "package-lock.json"
    if lock_file.exists():
        print("Removing package-lock.json...")
        lock_file.unlink()

    # 3. Fresh npm install
    print("\nRunning npm install...")
    result = subprocess.run(["npm", "install"], cwd=root)

    if result.returncode == 0:
        print("\nDone. Run 'npm run dev' to start the server.")
    else:
        print("\nnpm install failed.", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    fix()
