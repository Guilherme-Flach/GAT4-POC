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
          ];

          shellHook = ''
            echo "GAT4-POC dev environment"
            echo "  docker:         $(docker --version)"
            echo "  docker-compose: $(docker-compose --version)"
          '';
        };
      });
}
