{
  description = "GAT4-POC — geolocated health data visualization";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            docker
            docker-compose
            nodejs_22
            yarn
            osmium-tool
          ];

          shellHook = ''
            echo "GAT4-POC dev environment"
            echo "  node:           $(node --version)"
            echo "  yarn:           $(yarn --version)"
            echo "  docker:         $(docker --version)"
            echo "  docker-compose: $(docker-compose --version)"
            echo "  osmium:         $(osmium --version 2>&1 | head -1)"
          '';
        };
      });
}
